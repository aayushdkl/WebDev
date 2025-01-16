import React from "react"

const Card = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjPFW-69Q-Vfxz8A-FiKN9PxR8Vz33JdpEFg&s"
        alt="Card Image"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Sample Card</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
          blanditiis excepturi nesciunt error corporis at nulla est ab in
          facilis.
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default Card
