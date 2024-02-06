import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Root from './pages/root.jsx'


function App() {
  return (
    <>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Root />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App