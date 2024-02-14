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
        <div className="about-summary">
          <div className='summary-avatar'>
            <img src="src/assets/images/Avatar.jpg" alt="avatar" />
            <div className='summary-education'>
              <img src="src/assets/images/University_of_Queensland_(crest).png" alt="uq logo" />
              <span>Master of Computer Science @UQ</span>
            </div>
          </div>
          <div className="summary-content">
            <h3>I'm a Master of Computer Science Stundet will graduate on Jun 2024.</h3>
            <p>Over the past 5+ years, </p>
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