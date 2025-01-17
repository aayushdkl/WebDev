import { useState } from "react"
import { IoIosMenu } from "react-icons/io"
import { IoMdClose } from "react-icons/io"

export default function Navbar() {
  const [nav, setNav] = useState(false)

  return (
    <div className="text-white flex justify-center w-screen items-center">
      <h1 className="text-[#00df9a] w-full text-3xl font-bold p-3">REACT.</h1>
      <ul className="hidden md:block md:flex ">
        <li className="p-4">Home</li>
        <li className="p-4">Company </li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      {nav ? (
        <IoMdClose
          className="md:hidden text-6xl mr-8"
          onClick={() => setNav(!nav)}
        />
      ) : (
        <div className="mr-8 ">
          <IoIosMenu
            className="md:hidden text-6xl "
            onClick={() => setNav(!nav)}
          />
        </div>
      )}

      <div>
        <ul
          className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white uppercase transition-transform duration-300 transform ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <li className="p-4 border-b">Home</li>
          <li className="p-4 border-b">Company </li>
          <li className="p-4 border-b">Resources</li>
          <li className="p-4 border-b">About</li>
          <li className="p-4 border-b">Contact</li>
        </ul>
      </div>
    </div>
  )
}
