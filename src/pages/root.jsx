import React from 'react'
import Navbar from '../components/Navbar'
import Gallery from '../components/Gallery'

function root() {
  return (
    <>
      <div className='header'><Navbar /></div>
      <div className='content'>
        <Gallery />
      </div>
    </>
  )
}

export default root