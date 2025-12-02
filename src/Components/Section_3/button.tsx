// Tarea crear un modal con temporizador en pantalla y que podamos cerrar y abrir, y que cuando lo cerremos se pare el temporizador
 'use client'
    import { useState } from "react"
    import ModalComponent from "./modal"

    // Primer paso crear los estados para el cierre del modal

    const Button = () => {
        const [isOpen, setIsOpen] = useState(false) // Iniciamos en false para que este cerrado desde un principio.

        return (
            <div>
                {/* Creamos el botton para cerrar y abrir el modal */}
                <button onClick={() => setIsOpen(!isOpen)}>
                    {/* Aca mismo ponemos los condicionales para poder cambiar de estado */}
                    {isOpen ? "Cerrar" : "Abrir"}
                </button>

                <div>
                    {isOpen && <ModalComponent />}
                </div>
            </div>
        )
    }
    export default Button