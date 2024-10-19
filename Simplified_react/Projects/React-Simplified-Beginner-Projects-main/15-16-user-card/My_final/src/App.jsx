import { useState } from "react"
import user from "./user.json"
import "./user.css"
import { UserCard } from "./UserCard"

function App() {
  return (
    <UserCard
      name={user.name}
      age={user.age}
      address={user.address}
      phoneNumber={user.phoneNumber}
    ></UserCard>
  )
}

export default App
