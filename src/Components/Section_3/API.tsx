import { useFetch } from "./hooks/useFetch"


const API = () => {

    const {data, error, loading} = useFetch()

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
