import { useEffect, useState } from "react"

export function ToDo() {
  const [todo, setTodo] = useState()
  useEffect(() => {}, [])

  return (
    <div id="new-todo-form">
      <label htmlFor="todo-input">New Todo</label>
      <input type="text" id="todo-input" />
      <button>Add Todo</button>
    </div>
  )
}
