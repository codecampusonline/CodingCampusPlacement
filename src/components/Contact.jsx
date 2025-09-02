import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <div className="h-70 bg-gradient-to-r from-blue-900 to-pink-700 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl font-bold m-4">Contact US</h1>
        <p>If you have any queries or want to know more in details do reach our experts by a single call (+91 6302 4303 37 , +91 7019 2149 82) or <br />fill the enquiry form to request a call back</p>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left side with padding */}
        <div className="p-10">
          <h1 className='font-bold text-4xl'>Contact Us</h1>
          <p className="mt-2">
            We are eager to listen to your training requirements. Kindly complete the form below, and we will be in touch within 24 hours.
          </p>
          
          <div className="flex items-center gap-4 mt-6">
            <div className="bg-black p-3 rounded-full inline-block">
              <FaPhoneAlt className="text-orange-400" style={{ fontSize: '2rem' }} />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-orange-400">Phone</h1>
              <h1 className="texrt-md font-bold">( +91 ) 6302 4303 37 , 7019 2149 82</h1>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <div className="bg-black p-3 rounded-full inline-block">
              <MdEmail className="text-orange-400" style={{ fontSize: '2rem' }} />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-orange-400">Email</h1>
              <h1 className="text-md font-bold">onlinecodecampus@gmail.com</h1>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <div className="bg-black p-3 rounded-full inline-block">
              <FaWhatsapp className="text-orange-400" style={{ fontSize: '2rem' }} />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-orange-400">What's app</h1>
              <h1 className="text-md font-bold">( +91 ) 6302 4303 37 , 7019 2149 82</h1>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className='p-10'>
          <img src={"/images/map.png"} alt="" />
        </div>
      </div>


    </>
  )
}

export default Contact
