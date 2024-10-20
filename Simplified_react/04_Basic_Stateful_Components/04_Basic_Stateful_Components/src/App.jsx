// import { useState } from "react"
// import { Counter } from "./Counter"

// function App() {
//   const [name, setName] = useState("Phantom") //Hooks should always be at the top
//   const [age, setAge] = useState(20)
// const [count, setCount] = useState(0)
// const [person,setPerson] = useState({name:"Eminem", age: 52})

// function changeName() {
//   setName("Marshall")
//   setAge(52)
//   setCount(count + 1)
// }
// function handleClick() {
//   setName("Marshall")
//   setAge(52)
// }

// return (
//   <h1 onMouseDown={handleClick}>
//     {name} {age}
//   </h1>
// )

// return (
//   <h1 onClick={changeName}>
//     hello {name} {age}. Count is {count}
//   </h1>
// )

// return <Counter></Counter>
// }

import { useState } from "react"

function App() {
  const [name, setName] = useState("Marshall")

  return (
    <input
      type="text"
      value={name}
      onChange={(x) => {
        setName(x.target.value)
      }}
    />
  )
}

export default App
