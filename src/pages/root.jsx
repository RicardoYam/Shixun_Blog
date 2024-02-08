import React from 'react'
import Navbar from '../components/Navbar'
import './root.css'
import { IoIosArrowRoundForward } from "react-icons/io";

function root() {
  return (
    <>
      <div className='header'><Navbar /></div>
      <div className='content'>
        <div className="banner">
          <h1>Hello,</h1>
          <h1>Nice to meet you</h1>
          <div className='content-contact'>
            <IoIosArrowRoundForward style={{ color: 'white', margin: '30px' }} size='130px' />
            <div className='content-contact-item'>
              <p>Front-end &</p>
              <p>Back-end development</p>
            </div>
            <div className='content-contact-item'>
              <p>Data Analysis</p>
            </div>
            <div className='content-contact-item'>
              <p>Contact:</p>
              <p>lishixun1219@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default root