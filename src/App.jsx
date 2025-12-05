import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Profile from './Profile'
import Courses from './Courses'
import Contact from './Contact'

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Courses' element={<Courses />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  )
}
