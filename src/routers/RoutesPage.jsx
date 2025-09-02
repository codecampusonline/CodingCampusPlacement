import React from 'react'
import Navbar from '../layout/Navbar'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Carrer from '../components/Carrer'
import Contact from '../components/Contact'
import ClassTimings from '../components/ClassTimings'
import AllCourses from '../components/AllCourses'
import HireForm from '../components/HireForm'
import Footer from '../components/Footer'
import JavaSyllabus from '../components/JavaSyllabus'
import WebTechSyllabus from '../components/WebTechSyllabus'
import ReactSyllabus from '../components/ReactSyllabus'
import SqlSyllabus from '../components/SqlSyllabus'
import PythonSyllabus from '../components/PythonSyllabus'
import EnrollForm from '../components/EnrollForm'

const RoutesPage = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/carrer" element={<Carrer/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path='/class-timings' element={<ClassTimings/>}/>
        <Route path='/' element={<AllCourses/>}/>
        <Route path='/hire-from-us' element={<HireForm/>}/>
        <Route path='/java-syllabus' element={<JavaSyllabus/>}/>
        <Route path='/webTech-syllabus' element={<WebTechSyllabus/>}/>
        <Route path='/react-syllabus' element={<ReactSyllabus/>}/>
        <Route path='/sql-syllabus' element={<SqlSyllabus/>}/>
        <Route path='/python-syllabus' element={<PythonSyllabus/>}/>
        <Route path='/enroll-form' element={<EnrollForm/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default RoutesPage
