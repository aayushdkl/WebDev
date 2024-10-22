import e from "cors"
import { useState } from "react"

export function ToDoComponent() {
  const [tasks, setTasks] = useState([
    "listen to eminem",
    "drink some water",
    "Touch some grass",
  ])
  const [newtasks, setnewTasks] = useState("")

  function addToDo() {
    if (newtasks.trim() !== "") {
      setTasks((t) => [...t, newtasks])
      setnewTasks("")
    }
  }
  function deletetasks(index) {
    const updatedTasks = tasks.filter((_, i) => i != index)
    //filtering out the task to be deleted. (_,i) is a destructuring syntax where _ is the value and i is the index. We use _ when we don't want to use the value.

    setTasks(updatedTasks)
  }
  function upVote(index) {
    if (index > 0) {
      const updatedTasks = [...tasks]
      ;[updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ]
      setTasks(updatedTasks)
    }
  }

  function downVote(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks]
      ;[updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ]
      setTasks(updatedTasks)
    }
  }

  return (
    <div className="container">
      <h2 className="header">The To Do List is :</h2>
      <div className="todo-card">
        <input
          type="text"
          placeholder="Add a new todo item"
          value={newtasks}
          onChange={(e) => {
            setnewTasks(e.target.value)
          }}
        />
        <button className="btn" onClick={addToDo}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((tasks, index) => {
          return (
            <li key={index}>
              <span className="tasks">{tasks}</span>
              <button
                className="btn"
                onClick={() => {
                  deletetasks(index)
                }}
              >
                Delete
              </button>
              <button
                className="btn"
                onClick={() => {
                  upVote(index)
                }}
              >
                Upvote
              </button>
              <button
                className="btn"
                onClick={() => {
                  downVote(index)
                }}
              >
                Downvote
              </button>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
