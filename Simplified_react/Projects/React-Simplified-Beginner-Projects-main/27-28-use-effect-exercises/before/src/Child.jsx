import { useEffect, useState } from "react"

export function Child() {
  const [age, setAge] = useState(0)
  const [name, setName] = useState("")

  useEffect(() => {
    console.log("Render")

    return () => {
      console.log("Hi")
    }
  })
  useEffect(() => {
    console.log("hi")
  }, [])
  useEffect(() => {
    console.log(`My name is ${name} and I am ${age} years old`)
    document.title = name
  }, [name, age])

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(`My name is ${name}`)
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [name])

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setAge((a) => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge((a) => a + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  )
}
