import React, { useState } from 'react'
import { FaBookOpen } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SqlSyllabus = () => {
    const [price,setPrice]=useState(true);
  return (
    <>
       <div className='bg-gradient-to-b from-orange-300 to-white py-10 px-6'>
        <div className='grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-6 items-center'>
          <div className='md:col-span-3 text-left mt-4'>
            <h1 className="text-3xl font-bold mb-2">SQL Certification Training Course</h1>
            <p className="text-lg mb-1">Master in SQL.</p>
            <p className="text-md text-gray-700 font-bold">Duration: 1 1/2 months (45 Days)</p>
            <p className="text-md text-gray-800">The SQL Certification Training Course is designed to help you master the fundamentals of Structured Query Language (SQL), the standard language for relational database management systems. Throughout this 45-day program, you'll learn how to write efficient queries, manage and manipulate data, and work with real-world databases using tools like MySQL, PostgreSQL, and SQL Server. Whether you're aiming for a career in data analysis, backend development, or database administration, this course provides hands-on practice and real-time projects to build your confidence and prepare you for industry-level challenges.</p>

          </div>
         <div className='md:col-span-2 mt-6 md:mt-10 bg-white rounded-lg border-4 border-white shadow-lg'>
            <img src={"/images/sqlLogo.png"} alt="Java Thumbnail" className="w-full mb-4 rounded h-65" />
            <button className={` ${price ? 'bg-blue-600 text-white' :'bg-white text-black border-[2px] border-black' }  px-2 py-2 rounded mb-4 transition hover:cursor-pointer m-4`} onClick={()=>{setPrice(true)}}>Online Training</button>
            <button className={`${!price? 'bg-blue-600 text-white': 'bg-white text-black border-[2px] border-black'} px-4 py-2 rounded mb-4 transition hover:cursor-pointer`}onClick={()=>{setPrice(false)}}>One To One Training</button>
            {price? <><h1 className="text-center"><span className='text-xl font-semibold mb-2'>Price : </span><span className='text-gray-400 line-through mb-1'>INR 4500</span></h1>
            <p className=" text-xl font-bold mb-4 text-center pl-6">INR <span className='text-yellow-400'>3499</span></p>
              </> : <>
              <h1 className="text-center"><span className='text-xl font-semibold mb-2'>Price</span> <span className='text-gray-400 line-through mb-1'>INR 18000</span></h1>
            <p className=" text-xl font-bold mb-4 text-center">INR <span className='text-yellow-400'>13999</span></p>
              </>}
              <div className="flex justify-center">
                <Link to="/enroll-form"><button className="bg-orange-500 text-black px-4 py-2 rounded transition hover:cursor-pointer hover:bg-green-900 text-white">Enroll Now
                </button></Link>
              </div>
          </div>
        </div>
      </div>

        <div className='px-6 py-8 text-left'>
            <h1 className="text-2xl font-semibold mb-4">Course Content</h1>
            <ol className="list-none space-y-2 text-gray-800">
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Introduction to SQL</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />DataTypes</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Constraints</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Data Query Language</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Operator</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Function</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Grouping</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Sorting</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Subquery</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Joins</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Co-Related Subquery</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Data Definition Lanuage(DDL)</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Data Manipulation Language</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Transaction Control Language</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Data Control Language</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Normalization</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Mock interview</li>
            </ol>
        </div>
    </>
  )
}

export default SqlSyllabus
