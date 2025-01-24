import React, { useState } from "react"

const InputField = ({ value, onChange, placeholder, type }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  )
}

export default InputField
