import { useState } from "react"
import "./style.css"
// import { BasicControlledInput } from "./BasicControlledInput"
import { HandlingMultipleInputs } from "./HandlingMultipleInputs"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <BasicControlledInput /> */}
      <HandlingMultipleInputs />
    </>
  )
}

export default App
