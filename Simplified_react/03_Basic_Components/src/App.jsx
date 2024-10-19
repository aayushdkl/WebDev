import React from "react"
import { TodoList } from "./TodoList"
import { NameFunc } from "./NameFunc"
import "./styles.css"
import user from "./user.json"

function App() {
  // return React.createContext("h1", { id: "5" }, "Hello World")
  const theLabel = <label htmlFor="inputId">This is a label </label>
  return (
    <div>
      {/* <NameFunc>Aayush Dhakal</NameFunc> */}
      <TodoList isComplete={true}>Go do some loundry</TodoList>
      <TodoList isComplete={false}>Cycle for a while</TodoList>
      {JSON.stringify(user)}
    </div>
  )
}

export default App
