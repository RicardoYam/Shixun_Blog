import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Root from './pages/root.jsx'
import Projects from './pages/projects.jsx'
import About from './pages/about.jsx'


function App() {
  return (
    <>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Root />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App