import { useEffect } from "react"
import { useState } from "react"

export function Child() {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        setWidth(window.innerWidth)
      },
      []
    )
  })
  return <div>{width}</div>
}
