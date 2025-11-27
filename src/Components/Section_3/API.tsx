import { useEffect, useState } from "react"

interface Props {
    userId: number
    id: number
    title: string
    completed: boolean
}

const API = () => {

    const [data, setData] = useState<Props | null>(null)
    const [error, setError] = useState<null | string>(null)
    const [loading, setLoading] = useState<boolean>(true)

    // Consumimos una API externa
    useEffect(() => {
        // Si quiero usar Try-Catch tengo que tener una funcion asincrona.
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
                const data = await response.json()
                if(!response.ok) throw new Error("Error al consumir la API")
                setData(data)
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message)
                }
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])


    if (loading) return <div>Loading........</div>
    if (error) return <div>{error}</div>

    return (
        <div>
            {
                data && (
                    <div>
                        <p><strong>Titulo:</strong> {data.title}</p>
                        <p><strong>UserID:</strong> {data.userId}</p>
                        <p>Id: {data.id}</p>
                        <p>Completado: {data.completed ? "Si" : "No"}</p>
                    </div>
                )
            }
        </div>
    )
}

export default API
