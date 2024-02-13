import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import './root.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Link } from 'react-router-dom';

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
              <a href="https://www.linkedin.com/in/shixun-li-669a4b287/"><FaLinkedin style={{ color: 'white', marginTop: '10px', marginRight: '10px' }} size='30px' /></a>
              <a href="https://github.com/RicardoYam"><FaGithub style={{ color: 'white', marginTop: '10px', marginRight: '10px' }} size='30px' /></a>
              <a href="https://leetcode.com/RicardoOVO/"><SiLeetcode style={{ color: 'white', marginTop: '10px' }} size='30px' /></a>
            </div>
          </div>
        </div>
        <div className='content-intro'>
          <div className="cotent-intro-text">
            <img src="src\assets\images\logo-banner.png" alt="intro-image" />
            <div className="content-intro-text-lable">
              <div className='lable-text'>Shixun.com</div>
              <span><Link to={"/projects/blog"}>View this project</Link></span>
            </div>
            <p>My personal website, a symphony of React, Spring Boot, and MySQL, is subtly crafted to highlight content, with user-centric design guiding your seamless journey.</p>
          </div>
          <video src="src\assets\videos\fashion.mp4" autoPlay loop muted></video>
        </div>
        <div className="content-kubernetes">
          <img src="src/assets/images/weather-explorer.jpg" alt="kubernetes" />
          <div className="content-intro-text content-kub">
            <div className='lable-text'>Kubernetes based microservice weather searching website</div>
            <span className='content-intro-text-lable'><Link to={"/projects/kubernetes"}>View this project</Link></span>
            <p>My personal website, a symphony of React, Spring Boot, and MySQL, is subtly crafted to highlight content, with user-centric design guiding your seamless journey.</p>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default root