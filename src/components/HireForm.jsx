import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdManageAccounts,MdEmail } from "react-icons/md";

const HireForm = () => {
  return (
    <>
      <div className="px-4 flex justify-center flex-col items-center text-center bg-gradient-to-b from-orange-100 to-white min-h-screen">
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
          Welcome To The <span className='text-orange-500'>Hire From Us Platform</span>, Hire Candidates With Just A Click.
        </h1>
        <p className='text-lg md:text-2xl font-semibold mb-4'>
          Your gateway to skilled software candidates. With just a click, ensure your code meets the highest standards.
          Hire your qualified trained freshers at no cost — 24/7 support from our HR team.
        </p>

        {/* Contact Info */}
        <div className="w-full text-left pl-4 md:pl-12 mt-6">
          <p className="text-lg font-semibold mb-2">For more details contact:</p>
          <div className="flex flex-wrap items-center gap-4 text-base">
            <span className="flex items-center gap-1"><MdManageAccounts className="text-orange-600" /> Mr. Madhu</span>
            <span className="flex items-center gap-1"><FaPhoneAlt className="text-green-600" /> +91 6302 4303 37 <b>,</b> 7019 2149 82</span>
            <span className="flex items-center gap-1"><MdEmail className='text-blue-800'/> onlinecodecampus@gmail.com</span>
            <span className="flex items-center gap-1"><FaWhatsapp className="text-green-500" /> +91 6302 4303 37 <b>,</b> 7019 2149 82</span>
          </div>
        </div>
      </div>
      <div>
        <img src={"/images/HiringProcess.png"} alt="" />
      </div>
    </>
  );
};

export default HireForm;
