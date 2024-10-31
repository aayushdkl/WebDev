import { useState } from "react"
import { Counter } from "./Counter"
import { InputValidation } from "./InputValidation"
import { Todolist } from "./Todolist"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter /> */}
      {/* <InputValidation /> */}
      <Todolist />
    </>
  )
}

export default App
