import React from "react"

const Modal = ({ title, content, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-1/3 p-4">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-red-500 font-bold hover:underline"
          >
            X
          </button>
        </div>
        <div className="mt-4">{content}</div>
      </div>
    </div>
  )
}

export default Modal
