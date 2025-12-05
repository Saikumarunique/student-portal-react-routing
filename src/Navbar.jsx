import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
       <nav>
        <ul>
            <li><Link to="/Home">Home</Link></li>
             <li><Link to="/Profile">Profile</Link></li>
              <li><Link to="/Courses">Courses</Link></li>
               <li><Link to="/Contact">Contact</Link></li>
        </ul>
       </nav>
    </div>
  )
}
