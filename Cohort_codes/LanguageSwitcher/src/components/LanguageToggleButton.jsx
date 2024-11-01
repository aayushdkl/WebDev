import React from "react"
import { useLanguage } from "../LanguageContext"

const LanguageToggleButton = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button onClick={toggleLanguage}>
      Switch to {language === "en" ? "Spanish" : "English"}
    </button>
  )
}

export default LanguageToggleButton
