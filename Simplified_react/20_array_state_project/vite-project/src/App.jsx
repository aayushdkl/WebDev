import { set } from "mongoose"
import { useState } from "react"
import "./style.css"

const INITIAL_VALUE = ["A", "B", "C"]
function App() {
  const [array, setArray] = useState(INITIAL_VALUE)
  const [value, setValue] = useState("")

  function removeFirstElement() {
    setArray((currentArray) => {
      return currentArray.slice(1)
    })
  }

  // function removeSpecificElement() {
  //   const newArray = array.filter((x) => {
  //     if (x == "B") {
  //       return false
  //     } else {
  //       return true
  //     }
  //   })

  //   setArray(newArray)
  // }
  function removeSpecificElement(letter) {
    setArray((currentArray) => {
      return currentArray.filter((element) => element !== letter)
    })
  }
  function addLetterToStart(letter) {
    setArray((currentArray) => {
      return [letter, ...currentArray]
    })
  }
  function addLetterToEnd(letter) {
    setArray((currentArray) => {
      return [...currentArray, letter]
    })
  }
  function clearTheArray() {
    setArray([])
  }
  function resetTheArray() {
    setArray(INITIAL_VALUE)
  }
  function updateToH() {
    setArray((currentArray) => {
      return currentArray.map((x) => {
        if (x == "A") return "H"
        else return x
      })
    })
  }

  return (
    <div>
      <button onClick={removeFirstElement}>Remove First Element</button>
      <br />

      {/* <button onClick={removeSpecificElement}>Remove All the B's</button> */}
      <button onClick={() => removeSpecificElement("B")}>
        Remove All the B's
      </button>
      <br />
      <button onClick={() => addLetterToStart("A")}>Add to start</button>
      <br />
      <button onClick={() => addLetterToEnd("Z")}>Add to end</button>
      <br />
      <button onClick={clearTheArray}>Clear the array</button>
      <br />
      <button onClick={resetTheArray}>resetTheArray</button>
      <br />
      <button onClick={updateToH}>Update A's to H</button>
      <br />
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => addLetterToStart(value)}>
        Add value to array
      </button>
      <br />
      {array.join(",")}
    </div>
  )
}

export default App
