import { useRef, type FormEvent, useState } from "react"


const UncontrollerForm = () => {
    const [input, setInput] = useState<any>("");
    const inputRef = useRef<HTMLInputElement>(null); // Iniciamos en null porque React en un principio no tiene un elemento del DOM, cuando se inicializa recien ahi tenemos un elemento, pero antes no. 

    const hadlerChange = (e: FormEvent) => {
        e.preventDefault();
        setInput(inputRef.current?.value ?? " ")
    }

    const hadlerClean = (e: FormEvent) => {
        e.preventDefault()
        setInput("")
        inputRef.current ? inputRef.current.value = "" : null
    }

    return (
        <div>
            <h1>Formulario</h1>
            <form onSubmit={hadlerChange}>
                <input type="text" ref={inputRef} />
                <button>Enviar</button>
                <button onClick={hadlerClean}>Limpiar</button>
            </form>
            {input}
        </div>
    )
}
export default UncontrollerForm
