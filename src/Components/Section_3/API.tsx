import { useEffect, useState } from "react"

interface RootObject {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const ConsumerApi = () => {
    const [data, setData] = useState<RootObject | null>(null)
    const [error, setError] = useState<string | null>(null)


    // Consumimos una API con useEffect y Async Await
    useEffect(() => {
        const fechData = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
                if(!res.ok ) throw new Error("Error al consumir la API")
                const data = await res.json()
                setData(data)
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message)
                }
                else {
                    setError("Error desconocido")
                }
            }finally{
                console.log("Finally")
            }

        }

        fechData()
    },[])

    if (error) return <p>{error}</p>

    console.log(data?.title)
    return (
    <div>
        {data? (
            <div>
                <p>Id: {data?.id}</p>
                <p>Title: {data.title}</p>
                <p>Completed: {data.completed ? "Completado" : "No completado"}</p>
            </div>    
        ): null}
    </div>
  )
}

export default ConsumerApi
