import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function nav() {
  return (
    <>
      <div className='nav'>
        <a className='nav-logo'><Link to={'/'}>SHIXUN'S</Link></a>
        <nav className='nav-menu'>
          <ul>
            <li><Link to={'/projects'}>Projects</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default nav