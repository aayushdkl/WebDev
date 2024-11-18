import { useRecoilState, useRecoilValue } from "recoil"
import { completedTodos, todoListAtom } from "../recoil/todoAtoms"
import { useState } from "react"

export default function TodoList() {
  const [TodoListItems, setTodoListItems] = useRecoilState(todoListAtom)
  const completedTodosItems = useRecoilValue(completedTodos)
  const [isCompleted, setisCompleted] = useState(false)

  function handleChange(index) {
    const updatedList = TodoListItems.map((item, idx) => {
      return index == idx ? { ...item, checked: !item.checked } : item
    })
    setTodoListItems(updatedList)
  }

  return (
    <>
      <h3>The ToDoList is:</h3>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => {
          setisCompleted(!isCompleted)
        }}
      />
      Completed
      {!isCompleted ? (
        <ul>
          {TodoListItems.map((item, index) => (
            <li key={index}>
              {item.description}
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleChange(index)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {completedTodosItems.map((item, index) => (
            <li key={index}>{item.description}</li>
          ))}
        </ul>
      )}
    </>
  )
}
