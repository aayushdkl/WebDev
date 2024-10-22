import { useState } from "react"
import { ToDoComponent } from "./ToDoComponent"
import "./styles.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ToDoComponent />
    </div>
  )
}

export default App
