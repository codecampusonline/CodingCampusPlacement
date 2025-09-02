import React from 'react'
import { Link } from 'react-router-dom'
const AllCourses = () => {
    const items=[
        {
            id:1,
            name:"Software",
            course:"Core Java",
            enroll:"Enroll Course",
            syllabus:"Syllabus",
            img:"/images/java1.webp",
            url:"/java-syllabus"
        },
        {
            id:2,
            name:"Software",
            course:"Web Technology",
            enroll:"Enroll Course",
            syllabus:"Syllabus",
            img:"/images/webtech.png",
            url:"/webTech-syllabus"
        },
        {
            id:3,
            name:"Software",
            course:"React js",
            enroll:"Enroll Course",
            syllabus:"Syllabus",
            img:"/images/react.png",
            url:"/react-syllabus"
        },
        {
            id:4,
            name:"Software",
            course:"Core Python",
            enroll:"Enroll Course",
            syllabus:"Syllabus",
            img:"/images/python.png",
            url:"/python-syllabus"
        },
        {
            id:5,
            name:"Software",
            course:"SQL",
            enroll:"Enroll Course",
            syllabus:"Syllabus",
            img:"/images/sql.jpg",
            url:"/sql-syllabus"
        }
    ]
  return (
    <>
      {/* Header Section */}
      <div className="h-70 bg-gradient-to-r from-blue-900 to-pink-500 flex flex-col items-center justify-center text-white text-center px-4 py-10">
        <h1 className="text-4xl font-bold mb-2">All Courses</h1>
        <p>Our curated courses</p>
      </div>

      {/* Responsive Grid Section */}
      <div className="px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">All Courses</h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
        {/* Card 1 */}
       { items.map((ele)=>{
        return <div key={ele.id} className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.7)] cursor-pointer transform hover:scale-105 transition-transform duration-300 p-4">

        <img src={ele.img} alt="Core Java" className="w-full h-64 object-cover mb-4" />
        <hr className="border-t border-gray-300 -mx-4" />
        <h1 className='py-1'>{ele.name}</h1>
        <h1 className="text-2xl font-bold mb-2 py-1">{ele.course}</h1>
        <hr className="my-2" />
          <div className="flex justify-between items-center mt-2">
              <Link to='/enroll-form'><button className="bg-orange-400 px-4 py-2 rounded font-bold hover:cursor-pointer hover:bg-green-900 hover:text-white">{ele.enroll}</button></Link>
              <button className="text-blue-600 hover:underline cursor-pointer font-medium"><Link to
              ={ele.url}>{ele.syllabus}</Link></button>
          </div>
      </div>
       })}
      </div>
      </div>
    </>
  )
}

export default AllCourses;
