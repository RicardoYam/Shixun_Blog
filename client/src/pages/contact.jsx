import React from 'react'
import resume from '../assets/test.txt'
import Nav from '../components/Navbar'
import './contact.css'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Footer from '../components/Footer';
import banner from '/images/banner_about.jpg'

function contact() {
    return (
        <>
            <div className="header">
                <Nav />
            </div>
            <div className='content-about'>
                <h2>Hello,</h2>
                <h2>Let's chat</h2>
                <img className='banner-about' src={banner} alt="banner-about" />
                <div className='text-about'>
                    <p>Contact Me!</p>
                    <p>lishixun1219@gmail.com</p>
                    <div className='text-icons'>
                        <a href="https://www.linkedin.com/in/shixun-li-669a4b287/"><FaLinkedin style={{ color: 'white', marginRight: '10px' }} size='30px' /></a>
                        <a href="https://github.com/RicardoYam"><FaGithub style={{ color: 'white', marginRight: '10px' }} size='30px' /></a>
                        <a href="https://leetcode.com/RicardoOVO/"><SiLeetcode style={{ color: 'white' }} size='30px' /></a>
                        <div className="resume">
                            <a href={resume} download>Resume</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default contact