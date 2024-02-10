import React from 'react'
import Navbar from '../components/Navbar'
import './projects.css'
import Cards from '../components/Cards'

function projects() {
  return (
    <>
      <div className='header'><Navbar /></div>
      <div className="projects-content">
        <div className="main-content">
          <Cards />
        </div>
        <div className="sidebar">
          side
        </div>
      </div>
    </>
  )
}

export default projects