import React, { createContext, useContext, useState } from "react"

export const LanguageContext = createContext()

function App() {
  const [language, setLanguage] = useState("en")

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "es" : "en"))
  }

  return (
    <div>
      <LanguageContext.Provider value={language}>
        <LanguageToggle toggleLanguage={toggleLanguage} />
        <Greeting />
      </LanguageContext.Provider>
    </div>
  )
}

function LanguageToggle({ toggleLanguage }) {
  const language = useContext(LanguageContext)

  return (
    <button
      onClick={toggleLanguage}
      style={{ padding: "10px", marginTop: "20px" }}
    >
      Switch to {language === "en" ? "Spanish" : "English"}
    </button>
  )
}

function Greeting() {
  const language = useContext(LanguageContext)

  const greetings = {
    en: "Hello! Good Morning",
    es: "Hola! Buenos Dias!",
  }

  return <p>{greetings[language]}</p>
}

export default App
