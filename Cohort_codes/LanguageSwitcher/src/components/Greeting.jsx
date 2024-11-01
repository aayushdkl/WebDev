import React from "react"
import { useLanguage } from "../LanguageContext"

const Greeting = () => {
  const { language } = useLanguage()

  // Simple translation object
  const greetings = {
    en: "Hello! Good Morning",
    es: "Hola! Buenos Dias!",
  }

  return <p>{greetings[language]}</p>
}

export default Greeting
