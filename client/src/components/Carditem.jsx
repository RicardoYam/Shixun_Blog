import React from 'react'
import './Carditem.css'

function Carditem() {
  return (
    <div className='carditem'>
      <div className="card-introduction">
        <h5>Shixun.com</h5>
        <span>My personal website, a symphony of React, Spring Boot, and MySQL, is subtly crafted to highlight content, with user-centric design guiding your seamless journey.</span>
      </div>
      <div className="card-image">
        <img src="src/assets/images/iceland.jpg" alt=""/>
      </div>
    </div>
  )
}

export default Carditem