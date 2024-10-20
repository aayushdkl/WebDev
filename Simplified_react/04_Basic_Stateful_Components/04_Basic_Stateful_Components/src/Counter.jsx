import { useState } from "react"

export function Counter() {
  const [count, setCount] = useState(0)
  function increaseCounter() {
    setCount(count + 1)
  }
  return (
    <div onClick={increaseCounter}>
      <h1>Counter is {count}</h1>
    </div>
  )
}
