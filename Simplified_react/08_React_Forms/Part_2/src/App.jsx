import { useState } from "react"
import { useForm } from "react-hook-form"
import SimpleForm from "./SimpleForm"
import "./style.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SimpleForm />
    </>
  )
}

export default App
