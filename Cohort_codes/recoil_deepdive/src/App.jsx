import { useMemo, useState } from "react"
import { RecoilRoot, snapshot_UNSTABLE } from "recoil"
import Counter from "../components/Counter"
import DoubleCounter from "../components/DoubleCounter"
import CustomCounter from "../components/CustomCounter"
import TodoList from "../components/TodoList"
import UserList from "../components/UserList"
import { countAtom } from "../recoil/atoms"

function App({ initialRecoilState }) {
  return (
    <RecoilRoot
      initializeState={(snap) =>
        snap.set(countAtom, initialRecoilState?.countAtom || 0)
      }
    >
      <MyApp />
    </RecoilRoot>
  )
}

function MyApp() {
  return (
    <>
      <Counter />
      <DoubleCounter />
      <CustomCounter />
      <TodoList />
      <UserList />
    </>
  )
}

export default App
