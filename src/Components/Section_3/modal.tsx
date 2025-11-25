import { useEffect, useState } from "react"

const ComponentModal = () => {
    const [timeCount, setTimeCount] = useState<number>(0)

    useEffect(() => {
        // Creamos un contador 
        const timer = setInterval(() => {
            console.log("Timer")
            setTimeCount((e) => e + 1)
        }, 1000)

        // Limpiamos una vez que salimos
        return () => {
            
            clearInterval(timer)
        }
    }, [])


    return <div className="alert alert-danger">Tiempo: {timeCount}</div>
}
export default ComponentModal