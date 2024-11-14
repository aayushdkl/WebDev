import { useContext, useMemo } from "react"
import { CountContext } from "./context"
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil"
import { countAtom, evenSelector } from "./store/atoms/count"

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  console.log("re-render")
  return (
    <div>
      <CountRenderer />
      <Buttons />
      <CountIs />
    </div>
  )
}

function CountRenderer() {
  const count = useRecoilValue(countAtom)

  return (
    <div>
      <b>{count}</b>
    </div>
  )
}

// function EvenCountRenderer() {
//   const isEven = useRecoilValue(evenSelector);

//   return <div>
//     {isEven ? "It is even" : null}
//   </div>
// }

function Buttons() {
  const setCount = useSetRecoilState(countAtom) //We use useSetRecoilState to set the value of the atom because we are not interested in the current value of the atom

  console.log("buttons re-rendererd")

  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1)
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((count) => count - 1)
        }}
      >
        Decrease
      </button>
    </div>
  )
}

function CountIs() {
  const countIs = useRecoilValue(evenSelector)
  return <div>{countIs == 0 ? "It is even" : null}</div>
}

export default App

//for using recoil get familiar with the following hooks
// useRecoilState
// useRecoilValue
// useSetRecoilState
// useRecoilCallback
// useRecoilTransactionObserver_UNSTABLE
// useRecoilSnapshot
