import { useState } from "react"
import { usePosts } from "./hooks/usePosts"
import { Posts } from "./components/Posts"
import { useFetch } from "./hooks/useFetch"
function App() {
  const [postNo, setPostNo] = useState(1)
  const { finalData, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + postNo
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error:{error}</p>
  return (
    <>
      {/* <Posts></Posts> */}
      {/* <div>
        <ul>
          {finalData.map((data) => (
            <li key={data.id}>{data.body}</li>
          ))}
        </ul>
      </div> */}

      <button onClick={() => setPostNo(2)}>First Post</button>
      <button onClick={() => setPostNo(3)}>Second Post</button>
      <button onClick={() => setPostNo(4)}>Third Post</button>
      <div>{JSON.stringify(finalData)}</div>
    </>
  )
}

export default App
