import { useState } from "react"
// import { PriceTracker } from "./PriceTracker"
import { PriceTracker2 } from "./PriceTracker2"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [count, setCount] = useState(0)

  return <PriceTracker2 />
  // return <PriceTracker />
}

export default App
