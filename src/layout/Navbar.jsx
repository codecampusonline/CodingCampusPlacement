import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaPhoneAlt,FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ToastContainer } from 'react-toastify';
import { FaXTwitter,FaTelegram } from "react-icons/fa6";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
    <ToastContainer />
      {/* Top bar + navbar wrapper */}
      <div className="fixed top-0 left-0 w-full z-50">
        {/* Top Contact Bar */}
        <div className="bg-orange-500 text-sm py-2 px-4 flex justify-between items-center">
          {/* Left: Contact Info */}
          <div className="text-white font-medium flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0 text-xs sm:text-sm md:text-base">
            <span className="flex items-center space-x-1">
              <FaPhoneAlt />
              <span>+91 6302 4303 37</span>
            </span>

            <span className="flex items-center space-x-1">
              <MdEmail />
              <span>onlinecodecampus@gmail.com</span>
            </span>

            <span className="flex items-center space-x-1 text-green-300">
              <FaWhatsapp />
              <span>+91 6302 4303 37 | +91 7019214982</span>
            </span>
          </div>

          {/* Right: Social Icons */}
          <div className="flex space-x-4 text-gray-600">
            <a href="https://www.facebook.com/profile.php?id=61579945260744" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/917019214982" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black"><FaWhatsapp /></a>
            <a href="https://www.youtube.com/@CodingCampusPlacement" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black"> <FaYoutube /></a>
            <a href="https://t.me/coding_campus_placement" target="_blank" rel="noopener noreferrer" className='text-white hover:text-black'><FaTelegram /></a>
            <a href="https://wa.me/917019214982" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black">
            <FaXTwitter />
            </a>
            <a href="https://www.instagram.com/onlinecampusplacement/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/CodintgCampusPlacement/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Navbar */}
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo and Desktop Links */}
              <div className="flex items-center space-x-8">
                <img src={"/code1.png"} alt="" width={"60px"} height={"60px"}/>
                <h1 className="text-xl font-extrabold text-orange-600 drop-shadow-md tracking-wide italic -ml-8">CodingCampusPlacement</h1>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-8">
                  <Link to="/" className="text-gray-800 hover:text-blue-600 font-medium ml-4">
                    All Courses
                  </Link>
                  <Link to="/hire-from-us" className="text-gray-800 hover:text-blue-600 font-medium">
                    Hire From Us
                  </Link>
                  <Link to="/carrer" className="text-gray-800 hover:text-blue-600 font-medium">
                    Careers
                  </Link>
                  <Link to="/contact-us" className="text-gray-800 hover:text-blue-600 font-medium">
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Desktop Enroll Button */}
              <div className="hidden md:flex">
                <Link
                  to="/enroll-form"
                  className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
                >
                  Enroll Course
                </Link>
              </div>

              {/* Hamburger for Mobile */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-800 hover:text-gray-600 focus:outline-none"
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-white px-4 pb-4 shadow-md">
              <Link to="/" onClick={handleCloseMenu} className="block py-2 text-gray-800 hover:text-blue-600">
                All Courses
              </Link>
              <Link to="/hire-from-us" onClick={handleCloseMenu} className="block py-2 text-gray-800 hover:text-blue-600">
                Hire From Us
              </Link>
              <Link to="/carrer" onClick={handleCloseMenu} className="block py-2 text-gray-800 hover:text-blue-600">
                Careers
              </Link>
              <Link to="/contact-us" onClick={handleCloseMenu} className="block py-2 text-gray-800 hover:text-blue-600">
                Contact Us
              </Link>
              <Link
                to="/enroll-form"
                onClick={handleCloseMenu}
                className="block mt-2 bg-orange-500 text-white px-3 py-2 rounded-md text-center hover:bg-orange-600"
              >
                Enroll Course
              </Link>
            </div>
          )}
        </nav>
      </div>

      {/* Padding below fixed header */}
      <div className="pt-[128px]">
        {/* Other page content here */}
      </div>
    </>
  );
};

export default Navbar;
