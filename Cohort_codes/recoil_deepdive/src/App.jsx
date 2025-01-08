import { useState } from "react"
import { RecoilRoot } from "recoil"
import Counter from "../components/Counter"
import DoubleCounter from "../components/DoubleCounter"
import CustomCounter from "../components/CustomCounter"
import TodoList from "../components/TodoList"
import UserList from "../components/UserList"
// import { RecoilDevTools } from "recoil-devtools"
function App() {
  return (
    <RecoilRoot>
      {/* <RecoilDevTools /> */}
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
