import React, { useState } from 'react'
import { FaBookOpen } from "react-icons/fa";
import { Link } from 'react-router-dom';

const WebTechSyllabus = () => {
    const [price,setPrice]=useState(true);
  return (
    <>
       <div className='bg-gradient-to-b from-orange-300 to-white py-10 px-6'>
        <div className='grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-6 items-center'>
          <div className='md:col-span-3 text-left mt-4'>
            <h1 className="text-3xl font-bold mb-2">Web Technology Certification Training Course</h1>
            <p className="text-lg mb-1">Master in Web Technology.</p>
            <p className="text-md text-gray-700 font-bold">Duration: 1 & 1/2 months(45-Days)</p>
            <p className="text-md text-gray-800">This course is designed to provide a strong foundation in web development using HTML, CSS, JavaScript, and modern frameworks. Learn how to build responsive, interactive websites from scratch and gain hands-on experience in front-end technologies. Ideal for aspiring web developers, this training equips you with the skills needed to create professional websites and applications, preparing you for real-world development and job opportunities.</p>

          </div>
         <div className='md:col-span-2 mt-6 md:mt-10 bg-white rounded-lg border-4 border-white shadow-lg'>
            <img src={"/images/web_Tech_logo.png"} alt="Java Thumbnail" className="w-full  h-65 mb-4 rounded" />
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
        <h1  className="text-2xl font-semibold mb-4">HTML5 Syllabus</h1>
        <ol className="list-none space-y-2 text-gray-800">
        <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" /> Introduction to HTML</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />History , Versions & Features of HTML5</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />HTML5 Basics</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />HTML5 Semantic </li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />HTML5 Attributes</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />HTML5 Types of Lists</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />HTML5 Types Forms</li>
          <li  className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />HTML5 Anchor and HyperLinks</li>
          <li  className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />HTML5 Frames & Layouts</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />HTML iframes & Pre tag</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Absolute & Relative URLs Path</li>
          <li  className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />HTML5 MultiMedia and its embedding</li>
          <li  className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Advanced Concepts in HTML5</li>
         
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Mock Interviews</li>
        </ol>
        <h1  className="text-2xl font-semibold mb-4">CSS3 Syllabus</h1>
        {/* CSS */}
        <ol className="list-none space-y-2 text-gray-800">
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" /> Introduction to CSS3</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Ways to apply CSS3</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Color (rgd,hex,rgba) , Opacity , font properties , Background Properties , Border Properties & short hand property.</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />CSS3 Box Modeling</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />CSS3 Positions</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />CSS3 Styling Tables & Forms</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Web Design Pages</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />CSS3 Flex , Grid , Float</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />CSS3 Media Queires</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />CSS3 2D & 3D Transforms</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Shadow , Display property.</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />CSS3 Gradients , CSS Height/Width , Comments</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />CSS3 Z index</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />CSS Animations</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Responsive Web Design</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Mock Interview</li>
        </ol>
        {/* Boostrap */}
        <h1  className="text-2xl font-semibold mb-4">Boostrap Syllabus</h1>
        <ol className="list-none space-y-2 text-gray-800">
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" /> Introduction to Boostrap</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />How to Connect boostrap</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Bootstrap Forms</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Bootstrap Tables</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Bootstrap Lists</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Bootstrap Marging , Padding , border</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Cards</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Curosal</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Grid</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Navbar & Footer</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Model</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Buttons & shadow</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Opacity , z-index, Drop down</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Responsive Web Design </li>
        </ol>
        {/* JS */}
        <h1  className="text-2xl font-semibold mb-4">JavaScript Syllabus</h1>
        <ol className="list-none space-y-2 text-gray-800">
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Introduction to JavaScript</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Architecture</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Internal & External js</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Identifier Rules & Variables</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Dynamically Typed & Statically Typed Programming Language</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Conditional statements & Loops</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Typeof Operator</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Data Types(primitive & Non primitive)</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Falsey & Truty Values</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Types of variables</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Type Conversion & Type Coriance</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Operator</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Functions</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Scope</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Rest Operator & Spread Operator & Destructuring</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />ES-6 Features</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Array & Methods</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Hosting</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Objects -- CURD</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Event Handling (onclick,onsubmit,ondbclick,keyup,keydown etc..)</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />1st class function,call back function,higher order function</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />DOM & Date</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />This Keyword & JSON</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Call Apply Bind</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Map Filter Reducer</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Promises</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Browser Storages</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Asyn / Await & try catch finally</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Exception Handling</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Mock Interview</li>
        </ol>
      </div>
    </>
  )
}

export default WebTechSyllabus
