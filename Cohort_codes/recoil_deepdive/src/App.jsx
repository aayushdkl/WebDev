import { useState } from "react"
import { RecoilRoot } from "recoil"
import Counter from "../components/Counter"
import DoubleCounter from "../components/DoubleCounter"
import CustomCounter from "../components/CustomCounter"
import TodoList from "../components/TodoList"

function App() {
  return (
    <RecoilRoot>
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
    </>
  )
}

export default App
