import React from 'react';
import { FcManager } from "react-icons/fc";
import { FaLaptopCode, FaUserGraduate } from "react-icons/fa";
import Openings from './Openings';

const Carrer = () => {
  return (
    <>
      {/* Header Section */}
      <div className="h-70 bg-gradient-to-r from-blue-900 to-pink-500 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl font-bold m-4">Careers</h1>
        <p>Join our dynamic team and make an impact. Discover exciting career opportunities with us.</p>
      </div>

      {/* Why Join Us Section */}
      <div className="px-6 py-12 bg-gray-100">
        <h1 className="text-3xl font-bold text-center mb-10">Why Join Us?</h1>

        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <div className="flex justify-center mb-4">
              <FcManager className="text-yellow-400" style={{ fontSize: '4rem' }} />
            </div>
            <h2 className="text-xl font-semibold mb-2 text-center">Innovative Environment</h2>
            <p className="text-center">Work in a collaborative space where your ideas matter.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <div className="flex justify-center mb-4">
              <FaLaptopCode className="text-yellow-400" style={{ fontSize: '4rem' }} />
            </div>
            <h2 className="text-xl font-semibold mb-2 text-center">Career Growth</h2>
            <p className="text-center">Opportunities to grow and thrive in your professional journey.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <div className="flex justify-center mb-4">
              <FaUserGraduate className="text-yellow-400" style={{ fontSize: '4rem' }} />
            </div>
            <h2 className="text-xl font-semibold mb-2 text-center">Comprehensive Benefits</h2>
            <p className="text-center">Enjoy a range of benefits that prioritize your well-being.</p>
          </div>
        </div>
      </div>
      <Openings/>
    </>
  );
};

export default Carrer;
