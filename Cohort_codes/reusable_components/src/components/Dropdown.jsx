import React from "react"

const Dropdown = ({ options, selectedValue, onSelect, label }) => {
  return (
    <div className="relative">
      <label htmlFor="" className="block mb-2">
        {label}
      </label>
      <select
        value={selectedValue}
        onChange={(e) => onSelect(e.target.value)}
        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
