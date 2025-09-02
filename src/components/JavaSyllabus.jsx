import React, { useState } from 'react';
import { FaBookOpen } from "react-icons/fa";
import { Link } from 'react-router-dom';
const JavaSyllabus = () => {
  const [price,setPrice]=useState(true);
  return (
    <>
      <div className='bg-gradient-to-b from-orange-300 to-white py-10 px-6'>
        <div className='grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-6 items-center'>
          <div className='md:col-span-3 text-left mt-4'>
            <h1 className="text-3xl font-bold mb-2">Core Java Certification Training Course</h1>
            <p className="text-lg mb-1">Master in Core Java.</p>
            <p className="text-md text-gray-700 font-bold">Duration: 2 months</p>
            <p className="text-md text-gray-800">This course is designed to provide a solid foundation in Java programming. You'll learn essential concepts such as object-oriented programming, data types, control structures, exception handling, collections, multithreading, and more. Whether you're aiming for a career in software development or preparing for advanced Java frameworks like Spring and Hibernate, this course will equip you with the core skills needed to build robust and scalable applications.</p>
          </div>
         <div className='md:col-span-2 mt-6 md:mt-10 bg-white rounded-lg border-4 border-white shadow-lg'>
            <img src={"/images/coreJavaLogo.png"} alt="Java Thumbnail" className="w-full mb-4 rounded h-65" />
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
      <div className='px-6 py-8 text-left'>
        <h1 className="text-2xl font-semibold mb-4">Course Content</h1>
        <ol className="list-none space-y-2 text-gray-800">
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" /> Intro to Programming Language</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Architecture</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Basic program</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Identifiers & Rules</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Variables & Data Types</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Types of variables</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Operators & Methods</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Conditional Statements ( if , if-else,if-else-if,nested-if,switch , nested-swith.)</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Looping Statements ( for,while,do while,foreach.)</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Interview Number Programs & Pattern Programs</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Methods & Modifiers</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Method Overloading</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Type Casting & Ambiguity</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />What is JDK , JRE , Class loading , Static and non static members</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Object & Amandon object</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />This keyword</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Constructor , Constructor overloading , Copy constructor</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Blocks Static block & non static block</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Inheritance & Types of inheritance</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Use of super keyword , constructor , Final</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Overriding , @override annotation , Method hiding</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Non primitive Type casting (Derived type casting)</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Bindings & Types of Binding </li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Abstract & Advantages</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Interface</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Encapsulation , Instance of</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Polymorphism , Aggregation ,Composition , Singleton class</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Strings & Programs</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Arrays & Programs</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Sorting Algorithams & Searcging Algorithams</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Collections</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Exception Hanldings</li>
          <li className='flex items-start gap-2'> <FaBookOpen className="mt-1 text-orange-500" />Mock Interviews</li>
        </ol>
      </div>
    </>
  );
};

export default JavaSyllabus;
