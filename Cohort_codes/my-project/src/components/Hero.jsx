import { ReactTyped } from "react-typed"

export default function Hero() {
  return (
    <div className="h-full mt-48 md:mt-24">
      <div className="text-[#00df9a] uppercase font-bold text-xs text-center pb-3">
        growing with data analytics
      </div>
      <h1 className="text-white text-center font-bold text-4xl pb-3">
        Grow with data.
      </h1>

      <div className="flex items-center text-3xl text-center justify-center pb-3">
        <h2 className="text-white font-bold pr-2">
          Fast,flexible financing for{" "}
        </h2>
        <ReactTyped
          className="text-gray-500"
          strings={["B2B", "B2C", "SASS"]}
          typeSpeed={150}
          backSpeed={150}
          loop
        ></ReactTyped>
      </div>

      <h3 className="text-gray-500 text-center text-md pb-3">
        Monitor you data analytics to increase revenue for BTB, BTC, & SASS
        platforms
      </h3>
      <div className="flex items-center justify-center">
        <button className="bg-[#00df9a] rounded-md w-36 h-8 ">
          Get Started
        </button>
      </div>
    </div>
  )
}
