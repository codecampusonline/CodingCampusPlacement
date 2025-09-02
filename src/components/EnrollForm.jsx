import React, { useRef, useState } from 'react'
import { Validation } from './Validation';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
const VITE_LIVE_SERVICE_ID=import.meta.env.VITE_LIVE_SERVICE_ID
const VITE_LIVE_TEMPLATE_ID=import.meta.env.VITE_LIVE_TEMPLATE_ID
const VITE_LIVE_PUBLIC_API_KEY_ID=import.meta.env.VITE_LIVE_PUBLIC_API_KEY_ID
const EnrollForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    time:new Date(),
    course: "",
    message: "",
  });

  const [errors,setErrors]=useState({});
  const handleChange =(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    
    const result=Validation(formData);


    if (Object.keys(result).length === 0) {
     try {
      await emailjs.sendForm(VITE_LIVE_SERVICE_ID,VITE_LIVE_TEMPLATE_ID,formRef.current,{publicKey: VITE_LIVE_PUBLIC_API_KEY_ID,});
      // await emailjs.sendForm('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID',formRef.current,{publicKey: 'YOUR_PUBLIC_KEY',});
      toast.success("Form submitted successfully!")
      setFormData({
        name: "",
        phone: "",
        time:new Date(),
        course: "",
        message: "",
      });
      setErrors({}); // If you're using useState for error display
     } catch (error) {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send form. Please try again later.");
     }
      // Reset form
     
    } else {
      setErrors(result);
    }
    
  }
  return (
    <>
      <div className="h-70 bg-gradient-to-r from-blue-900 to-pink-500 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl font-bold m-4">Enroll Form</h1>
        <p> Your future starts with a single step. Whether you're looking to upgrade your skills, switch careers, or pursue your passion, the right training can change everything. At OnlineCampusPlacement, we believe in unlocking your potential through practical, hands-on learning. Join thousands of learners who have taken the leap and transformed their careers. Don’t wait for the perfect moment — create it. Enroll today and start building the future you deserve!</p>
      </div>
      <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Enroll in a Course</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Name</label>
          <input type="text" name="name" id="name" placeholder="Your full name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          {errors.name && ( <p className="text-red-500 text-sm mt-1">{errors.name}</p>)}
        </div>
        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block mb-1 font-medium">Phone Number</label>
          <input type="tel" name="phone" id="phone" placeholder="Enter Your Phone Number" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          {errors.phone && ( <p className="text-red-500 text-sm mt-1">{errors.phone}</p>)}
        </div>
        {/* Course Select */}
        <div>
          <label htmlFor="course" className="block mb-1 font-medium">Select Course</label>
          <select name="course" id="course" value={formData.course} onChange={handleChange}  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="" disabled> -- Choose a course --</option>
            <option value="Web Technology">Web Technology</option>
            <option value="React JS">React JS</option>
            <option value="Core Java">Core Java</option>
            <option value="Python">Python</option>
            <option value="SQL">SQL</option>
          </select>
          {errors.course && ( <p className="text-red-500 text-sm mt-1">{errors.course}</p>)}
        </div>
        {/* Message / Textarea */}
        <div>
          <label htmlFor="message" className="block mb-1 font-medium">Message</label>
          <textarea name="message" placeholder="Any questions or remarks..." rows="4" value={formData.message} onChange={handleChange}className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          {errors.message && ( <p className="text-red-500 text-sm mt-1">{errors.message}</p>)}
        </div>
        {/* Submit Button */}
        <input type="hidden" name="time" value={formData.time.toString()} />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-900 cursor-pointer transition">Submit</button>
      </form>
    </div>
    </>
  )
}

export default EnrollForm
