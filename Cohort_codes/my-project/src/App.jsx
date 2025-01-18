import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import { Analytics } from "./components/Analytics"
import Newsletter from "./components/Newsletter"
import Cards from "./components/Cards"

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Analytics></Analytics>
      <Newsletter></Newsletter>
      <Cards></Cards>
    </>
  )
}

export default App
