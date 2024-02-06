import React from 'react'
import Nav from '../components/Nav'
import Gallery from '../components/Gallery'
import Title from '../components/Title'

function root() {
  return (
    <>
      <Title></Title>
      <div className='content'>
        <Nav />
        <Gallery />
      </div>
    </>
  )
}

export default root