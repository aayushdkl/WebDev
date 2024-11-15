import { useState } from "react"
import { RecoilRoot } from "recoil"
import Counter from "../components/Counter"
import DoubleCounter from "../components/DoubleCounter"
import CustomCounter from "../components/CustomCounter"

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
    </>
  )
}

export default App
