import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function nav() {
  return (
    <>
        <nav className="navbar">
            <ul className='nav-menu'>
                <li className='nav-item'><Link to='/gallery' className='nav-link'>Gallery</Link></li>
                <li className='nav-item'><Link to='/projects' className='nav-link'>Projects</Link></li>
                <li className='nav-item'><Link to='/about' className='nav-link'>About</Link></li>
                <li className='nav-item'><Link to='/contact' className='nav-link'>Contact</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default nav