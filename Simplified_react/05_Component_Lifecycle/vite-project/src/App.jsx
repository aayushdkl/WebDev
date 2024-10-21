import { useState } from "react"
import { useEffect } from "react"

function App() {
  const [users, setUsers] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  let jsx
  if (loading) {
    jsx = <h2>Loading...</h2>
    console.log("loading")
  } else {
    jsx = JSON.stringify(users)
    console.log("loaded")
  }

  return (
    <div>
      <h1>Users</h1>
      {jsx}
    </div>
  )
}

export default App
