import React from 'react'
import { FaFacebook,FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaTelegram,FaInstagram,FaWhatsapp,FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer className="text-white text-sm px-6 py-6 flex flex-col items-center justify-center"  style={{ backgroundColor: '#0D104C' }}>
        <div className="flex items-center gap-4 text-2xl mb-2">
          <a href="https://www.youtube.com/@CodingCampusPlacement" target="_blank" rel="noopener noreferrer"> <FaYoutube /></a>
          <a href="https://www.facebook.com/profile.php?id=61579945260744" target="_blank" rel="noopener noreferrer" ><FaFacebook /></a>
          {/* <a href="https://www.linkedin.com/in/CodintgCampusPlacement/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a> */}
          <a href="https://t.me/coding_campus_placement" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
          <a href="https://www.instagram.com/onlinecampusplacement/" target="_blank" rel="noopener noreferrer"> <FaInstagram /></a>
          <a href="https://wa.me/917019214982" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          {/* <a href="https://x.com/CodingCampusO" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a> */}
        </div>
        <p>© 2025 OnlineCampusPlacement All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Footer;
//7019214982