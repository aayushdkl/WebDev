import e from "cors"
import { useState, useEffect } from "react"

export function NameAndAge({ favNumber }) {
  const [name, setName] = useState("Marshall")
  const [age, setAge] = useState(52)

  useEffect(() => {
    console.log("Age was changed", age)
  }, [age])

  function increaseAge() {
    setAge(parseInt(age + 1))
  }
  return (
    <div>
      <label>Input name here</label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <br />
      <label>Input age here</label>
      <button onClick={increaseAge}>+</button>
      {age}
      <button
        onClick={(e) => {
          setAge(age - 1)
        }}
      >
        -
      </button>

      <h2>
        My name is {name} and age is {age}
      </h2>
      {favNumber != null && <h2>My fav no. is {favNumber}.</h2>}
    </div>
  )
}
