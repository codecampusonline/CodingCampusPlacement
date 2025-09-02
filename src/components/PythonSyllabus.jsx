import React, { useState } from 'react';
import { FaBookOpen } from "react-icons/fa";
import { Link } from 'react-router-dom';

const PythonSyllabus = () => {
    const [price,setPrice]=useState(true);
  return (
    <>
      <div className='bg-gradient-to-b from-orange-300 to-white py-10 px-6'>
        <div className='grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-6 items-center'>
          <div className='md:col-span-3 text-left mt-4'>
            <h1 className="text-3xl font-bold mb-2">Core Python Certification Training Course</h1>
            <p className="text-lg mb-1">Master in Core Python.</p>
            <p className="text-md text-gray-700 font-bold">Duration: 2 months</p>
            <p className="text-md text-gray-800">This Core Python Certification Training Course is perfect for beginners and aspiring developers who want to build a strong foundation in Python programming. Over the span of 2 months, you will explore key concepts such as variables, data types, control structures, functions, file handling, object-oriented programming, and more. The course also includes hands-on exercises and mini-projects to help reinforce your understanding and improve problem-solving skills. Whether you're aiming for a career in software development, automation, or data science, mastering core Python is the first step toward success.</p>
          </div>
         <div className='md:col-span-2 mt-6 md:mt-10 bg-white rounded-lg border-4 border-white shadow-lg'>
            <img src={"/images/pythonLogo.png"} alt="Java Thumbnail" className="w-full mb-4 rounded h-65" />
            <button className={` ${price ? 'bg-blue-600 text-white' :'bg-white text-black border-[2px] border-black' }  px-2 py-2 rounded mb-4 transition hover:cursor-pointer m-4`} onClick={()=>{setPrice(true)}}>Online Training</button>
            <button className={`${!price? 'bg-blue-600 text-white': 'bg-white text-black border-[2px] border-black'} px-4 py-2 rounded mb-4 transition hover:cursor-pointer`}onClick={()=>{setPrice(false)}}>One To One Training</button>
            {price? <><h1 className="text-center"><span className='text-xl font-semibold mb-2'>Price : </span><span className='text-gray-400 line-through mb-1'>INR 5500</span></h1>
            <p className=" text-xl font-bold mb-4 text-center pl-6">INR <span className='text-yellow-400'>4499</span></p>
              </> : <>
              <h1 className="text-center"><span className='text-xl font-semibold mb-2'>Price</span> <span className='text-gray-400 line-through mb-1'>INR 20000</span></h1>
            <p className=" text-xl font-bold mb-4 text-center">INR <span className='text-yellow-400'>14999</span></p>
              </>}
              <div className="flex justify-center">
                <Link to='/enroll-form'><button className="bg-orange-500 text-black px-4 py-2 rounded transition hover:cursor-pointer hover:bg-green-900 text-white">Enroll Now
                </button></Link>
              </div>
          </div>
        </div>
      </div>
      {/* python syllabus */}
      <div className='px-6 py-8 text-left'>
        <h1 className="text-2xl font-semibold mb-4">Course Content</h1>
        <ol className="list-none space-y-2 text-gray-800">
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Introduction to Python</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Python Overview</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Features of python</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Introduction to the python IDLE and development environment</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Keyword</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Variables</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Identifier rules</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Data Types</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Operators</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Control Statements</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Functions</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Object Oriented Programming(OOPS)</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />List , Set , Encapulation and abstraction</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Lambda,map,filter</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Decorator , Iterator , Generator</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />File Handling</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Error Handling and Exceptions</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Packages</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Regular expression</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Multi threading</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Mock Interview</li>
        </ol>
      </div>
    </>
  )
}

export default PythonSyllabus
