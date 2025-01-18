import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import { Analytics } from "./components/Analytics"
import Newsletter from "./components/Newsletter"

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Analytics></Analytics>
      <Newsletter></Newsletter>
    </>
  )
}

export default App
