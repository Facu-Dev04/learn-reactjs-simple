## Formulario no Controlado

### useRef 

- El useRef nos permite poder acceder al elemento del DOM.

- Dentro del codigo que vemos estamos haciendo a una referencia del DOM del input.  

```
import { useRef, type FormEvent } from "react"

const UncontrollerForm = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const hadlerChange = (e: FormEvent) => {
        e.preventDefault()
        console.log(inputRef.current?.value)
    }

    return (
        <div>
            <h1>Formulario</h1>
            <form onChange={hadlerChange}>
                <input type="text" ref={inputRef} />
                <button>Enviar</button>
            </form>
        </div>
    )
}
export default UncontrollerForm
```



### FormData