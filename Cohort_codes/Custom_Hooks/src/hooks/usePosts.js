import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

export function usePosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data)
    })
  }, [])

  return posts
}
