import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useRef } from 'react';

function nav() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  return (
    <header>
      <span>SHIXUN</span>
      <button
        className="nav-btn"
        onClick={showNavbar}>
        <IoMdMenu />
      </button>
      <nav ref={navRef}>
        <ul>
          <li>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
              <IoMdClose/>
            </button>
          </li>
          <li><Link to={'/projects'}>Projects</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default nav