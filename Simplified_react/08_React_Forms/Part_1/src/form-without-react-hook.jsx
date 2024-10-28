import React from "react"

export default function FormWithoutReactHookForm() {
  return (
    <form className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
        Sign Up
      </h2>
      <div className="flex flex-col gap-y-4">
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition duration-200 ease-in-out shadow-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition duration-200 ease-in-out shadow-sm"
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition duration-200 ease-in-out shadow-sm"
        />
        <button
          type="submit"
          className="py-3 mt-4 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold tracking-wide shadow-lg hover:from-purple-500 hover:to-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
