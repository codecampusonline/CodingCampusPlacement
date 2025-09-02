import React, { useState } from 'react';
import { FaBookOpen } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ReactSyllabus = () => {
    const [price,setPrice]=useState(true);
  return (
    <>
      <div className='bg-gradient-to-b from-orange-300 to-white py-10 px-6'>
        <div className='grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-6 items-center'>
          <div className='md:col-span-3 text-left mt-4'>
            <h1 className="text-3xl font-bold mb-2">React js Certification Training Course</h1>
            <p className="text-lg mb-1">Master in React js.</p>
            <p className="text-md text-gray-700 font-bold">Duration: 1 1/2 Month (45 Days)</p>
            <p className="text-md text-gray-800">This comprehensive React JS Certification Training Course is designed to equip you with the skills needed to build dynamic, responsive web applications using one of the most popular JavaScript libraries. Whether you're a beginner or looking to sharpen your frontend development skills, this course covers everything from React fundamentals to advanced concepts like hooks, state management with Redux, and routing with React Router. Through hands-on projects and real-world examples, you'll gain practical experience that prepares you for professional development roles.</p>
          </div>
         <div className='md:col-span-2 mt-6 md:mt-10 bg-white rounded-lg border-4 border-white shadow-lg'>
            <img src={"/images/reactLogo.png"} alt="Java Thumbnail" className="w-full mb-4 rounded h-65" />
            <button className={` ${price ? 'bg-blue-600 text-white' :'bg-white text-black border-[2px] border-black' }  px-2 py-2 rounded mb-4 transition hover:cursor-pointer m-4`} onClick={()=>{setPrice(true)}}>Online Training</button>
            <button className={`${!price? 'bg-blue-600 text-white': 'bg-white text-black border-[2px] border-black'} px-4 py-2 rounded mb-4 transition hover:cursor-pointer`}onClick={()=>{setPrice(false)}}>One To One Training</button>
            {price? <><h1 className="text-center"><span className='text-xl font-semibold mb-2'>Price : </span><span className='text-gray-400 line-through mb-1'>INR 5000</span></h1>
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
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" /> Introduction to React js</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Folder Structure</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Types of Components</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Virtual DOM vs Real DOM</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />How to Connect Frameworks</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Import & Export</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Ways to apply styles</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />JSX Rules.</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Hooks (useState,useEffect,useRef,useReducer,useContext,useMemo,useCallback)</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />CURD Operations</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Register & Login Form</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Validations</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />React Router Dom</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Prop Drilling</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Custom Hooks</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Life Cycle of class components</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Promises / Fetch / axios try catch / async await</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Api Integration</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Redux Toolkit</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Create Portifolio</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />GET POST PUT DELETE PATCH</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />GIT / GITHUB Deploye project</li>
                <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Mock Interview</li>
            </ol>
        </div>
    </>
  )
}

export default ReactSyllabus
