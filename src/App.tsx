import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  const hadler = (e: number) => {
    setCount(count >= 0 ? count + e : 0)
  }

  return (
    <div>
      <button onClick={() => hadler(-1)}>-</button>
      {count}
      <button onClick={() => hadler(1)}>+</button>
    </div>
  )
}
