import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState, useRef } from 'react';

function nav() {
  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav')
  }

  return (
    <>
      <div className='nav'>
        <a className='nav-logo'><Link to={'/'}>SHIXUN'S</Link></a>
        <button className='nav-btn nav-btn-menu'>
          <IoMdMenu style={{ color: "white", marginTop: "5px" }} />
        </button>
        <nav ref={navRef}>
          <ul>
            <li><Link to={'/projects'}>Projects</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            <li>
              <button className='nav-btn nav-btn-close' onClick={showNavbar}>
                <IoMdClose style={{ color: "white", marginTop: "5px" }} />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default nav