import React from "react"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4  text-gray-300">
      <div className="md:flex ">
        <div className="md:w-[30rem]">
          <h1 className="text-[#00df9a] w-full text-3xl font-bold ">REACT.</h1>
          <p className="py-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            suscipit animi tempore nemo exercitationem facilis ea enim nisi
            delectus laudantium!
          </p>
          <div className="flex justify-between md:w-full my-4">
            <FaFacebook className="text-2xl mr-4" />
            <FaInstagram className="text-2xl mr-4" />
            <FaLinkedin className="text-2xl mr-4" />
            <FaTwitter className="text-2xl mr-4" />
            <FaYoutube className="text-2xl mr-4" />
          </div>
        </div>

        <div className="md:w-[32rem] grid grid-cols-3 md:grid-cols-12 py-4">
          <div className="md:col-span-3 flex justify-between">
            <div>
              <h6 className="font-medium text-gray-400 ">Solutions</h6>
              <ul>
                <li className="py-2 text-sm">Analytics</li>
                <li className="py-2 text-sm">Marketing</li>
                <li className="py-2 text-sm">Commerce</li>
                <li className="py-2 text-sm">Insights</li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-3 flex justify-between">
            <div>
              <h6 className="font-medium text-gray-400">Support</h6>
              <ul>
                <li className="py-2 text-sm">Pricing</li>
                <li className="py-2 text-sm">Documentation</li>
                <li className="py-2 text-sm">Guides</li>
                <li className="py-2 text-sm">API Status</li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-3 flex justify-between">
            <div>
              <h6 className="font-medium text-gray-400">Company</h6>
              <ul>
                <li className="py-2 text-sm">About</li>
                <li className="py-2 text-sm">Blog</li>
                <li className="py-2 text-sm">Jobs</li>
                <li className="py-2 text-sm">Press</li>
                <li className="py-2 text-sm">Careers</li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-3 flex justify-between">
            <div>
              <h6 className="font-medium text-gray-400">Legal</h6>
              <ul>
                <li className="py-2 text-sm">Claim</li>
                <li className="py-2 text-sm">Policy</li>
                <li className="py-2 text-sm">Terms</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
