import { useState } from "react"
import { Child } from "./Child"

function App() {
  const [count, setCount] = useState(0)

  return <Child />
}

export default App
