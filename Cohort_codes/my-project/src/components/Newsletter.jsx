import React from "react"

// const Newsletter = () => {
//   return (
//     <div className="min-h-fit mt-20 pb-14">
//       <h1 className="pl-3 text-white font-bold text-2xl pb-3">
//         Want tips & tricks to optimize your flow?
//       </h1>
//       <p className="text-white text-lg pl-3 pb-3">
//         Sign Up to our newsletter and stay up to date.
//       </p>
//       <div className="md:grid grid-cols-12 justify-start ">
//         <div className=" pb-6 pl-3 pr-3 col-span-10 md:pr-2">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className=" w-full rounded-md h-8 placeholder:gray-500 "
//           />
//         </div>

//         <div className="flex justify-center md:justify-start pb-6 col-span-2">
//           <button className="bg-[#00df9a] rounded-md w-36 h-8 ">
//             Notify Me
//           </button>
//         </div>
//       </div>
//       <p className="text-white text-lg pl-3 pb-3">
//         We care about the protection of your data. Read our Privacy Policy
//       </p>
//     </div>
//   )
// }
const Newsletter = () => {
  return (
    <div className="min-h-fit mt-20 pb-14 md:grid grid-cols-12">
      <div className="col-span-7">
        <h1 className="pl-10 text-white font-bold text-2xl pb-3">
          Want tips & tricks to optimize your flow?
        </h1>
        <p className="text-white text-lg pl-10 pb-3">
          Sign Up to our newsletter and stay up to date.
        </p>
      </div>

      <div className="col-span-5">
        <div className="md:flex pt-3">
          <div className=" pb-6 pl-3 pr-3 ">
            <input
              type="email"
              placeholder="Enter your email"
              className=" w-full rounded-md h-8 placeholder:gray-500 "
            />
          </div>

          <div className=" pb-6 flex justify-center">
            <button className="bg-[#00df9a] rounded-md w-36 h-8 ">
              Notify Me
            </button>
          </div>
        </div>

        <div className="">
          <p className="text-white text-lg pl-3 pb-3">
            We care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a] ">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
