import React from "react"
import Laptop from "../assets/laptop.jpg"
export const Analytics = () => {
  return (
    <div className="w-full bg-white grid pt-8 mt-8 md:grid-cols-2">
      <div className="mx-auto grid ">
        <img src={Laptop} alt="" className="w-56 pb-4" />
      </div>
      <div>
        <p className="text-[#00df9a] uppercase font-bold text-xs pb-4 pl-3">
          data analytics dashboard
        </p>
        <h1 className="text-black font-bold text-3xl pb-4 pl-3">
          Manage Data Analytics Centrally
        </h1>
        <p className="pl-3 pb-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum fugiat
          blanditiis voluptatibus vitae voluptas facilis ex maiores culpa,
          tempore laudantium. Totam obcaecati animi eligendi tenetur, ipsum vel
          beatae accusantium molestiae?
        </p>
        <div className="flex items-center justify-center pb-14">
          <button className="bg-black rounded-md w-36 h-8 text-[#00df9a]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

//rafc
