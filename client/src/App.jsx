import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Root from './pages/root.jsx'
import Projects from './pages/projects.jsx'


function App() {
  return (
    <>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Root />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App