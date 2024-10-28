import { useState } from "react"
import FormWithoutReactHookForm from "./form-without-react-hook"
// import "./style.css"
// import { BasicControlledInput } from "./BasicControlledInput"
import { HandlingMultipleInputs } from "./HandlingMultipleInputs"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <BasicControlledInput /> */}
      {/* <HandlingMultipleInputs /> */}
      <FormWithoutReactHookForm />
    </>
  )
}

export default App
