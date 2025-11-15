import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Growth from './pages/Growth'
import PriorityERP from './pages/PriorityERP'
import Careers from './pages/Careers'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import CaseStudies from './pages/CaseStudies'
import Blogs from './pages/Blogs'

export default function App(){
  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/growth' element={<Growth/>} />
        <Route path='/priority-erp' element={<PriorityERP/>} />
        <Route path='/careers' element={<Careers/>} />
        <Route path='/resources' element={<Resources/>} />
        <Route path='/case-studies' element={<CaseStudies/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </MainLayout>
  )
}