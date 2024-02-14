import React from 'react'
import './about.css'
import Nav from '../components/Navbar'
import Footer from '../components/Footer'
import TagCloud from '../components/Tagcloud'

function about() {
  return (
    <>
      <Nav />
      <div className='about-content'>
        <div className="about-title"><p>I'm Shixun.</p></div>
        <div className='about-education'>
          <div className="education-item">
            <img src="src/assets/images/UQ.jpg" alt="UQ logo" />
            <div className="education-text">
              <span>Master of Computer Science</span>
              <p>Feb 2023 - June 2024</p>
            </div>
          </div>
          <div className="education-item">
            <img src="src/assets/images/UQ.jpg" alt="UQ logo" />
            <div className="education-text">
              <span>Bachelor of Computer Science</span>
              <p>Feb 2020 - Dec 2023</p>
            </div>
          </div>

        </div>
        <div className="about-skills">
          <div className="skill-item java" style={{ '--targetWidth': '100%' }}>Java</div>
          <div className="skill-item python" style={{ '--targetWidth': '90%' }}>Python</div>
          <div className="skill-item react" style={{ '--targetWidth': '70%' }}>React & Vue</div>
          <div className="skill-item sql" style={{ '--targetWidth': '80%' }}>SQL</div>
        </div>
        <div className="about-tagcloud">
          <div><TagCloud /></div>
        </div>
      </div>
    </>
  )
}

export default about