import { useEffect, useState, useRef } from "react"
import { UseMemo } from "./UseMemo"
import { UseRef } from "./UseRef"
import { UseCallback } from "./UseCallback"

function App() {
  const [count, setCount] = useState(0)
  const kyleRef = useRef("Aayush")
  kyleRef.current = "sally"

  useEffect(() => {
    if (count > 5) {
      document.title = count
    }
  }, [count])
  return (
    <>
      {/* <UseMemo /> */}
      {/* <UseRef /> */}
      <UseCallback />
    </>
  )
}

export default App
