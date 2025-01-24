import React from "react"

const Button = ({ label, onClick, variant, disabled }) => {
  const styles =
    variant === "primary" ? "bg-blue-500 text-white" : "bg-gray-500 text-white"
  return (
    <>
      <button
        onClick={onClick}
        className={`rounded ${styles}`}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  )
}

export default Button
