// components/Counter.js
import React from "react"
import { useRecoilState } from "recoil"
import { countAtom } from "../recoil/atoms"

function Counter() {
  const [count, setCount] = useRecoilState(countAtom)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter
