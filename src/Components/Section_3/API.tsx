import { useEffect, useState } from "react"

interface Propmt {
    completed: boolean
    id: number
    title: string
    userId: number
}

const ConsumerAPI = () => {
    const [info, setInfo] = useState<Propmt | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(res => res.json())
            .then(data => {
                setInfo(data)
                setLoading(false)
            })

    }, [])

    if (loading) return "Cargando...."

    return (
        <div>
            {info ? (
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <p>{info.userId}</p>
                    <p>{info.title}</p>
                    <p>{info.id}</p>
                </div>
            ) : <div>"cargando"</div>}
        </div>
    )
}

export default ConsumerAPI

