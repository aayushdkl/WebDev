import React, { useReducer, useState } from "react"

export function Todolist() {
  // Initial state for the to-do list (empty array)
  const initialState = []

  // Define the reducer function
  const reducer = (state, action) => {
    // Write your reducer logic here
  }

  // Use the useReducer hook
  const [todos, dispatch] = useReducer(reducer, initialState)
  const [task, setTask] = useState("")

  // Function to handle adding a new to-do
  const handleAddTodo = () => {
    if (task.trim()) {
      dispatch({ type: "ADD_TODO", payload: task })
      setTask("")
    }
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTodo}>Add To-Do</button>

      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <button
              onClick={() => dispatch({ type: "TOGGLE_TODO", payload: index })}
            >
              Toggle Complete
            </button>
            <button
              onClick={() => dispatch({ type: "REMOVE_TODO", payload: index })}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
