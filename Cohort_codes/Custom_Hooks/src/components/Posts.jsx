import { usePosts } from "../hooks/usePosts"

export function Posts() {
  const posts = usePosts()

  return (
    <>
      <h1>The posts title are:</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  )
}
