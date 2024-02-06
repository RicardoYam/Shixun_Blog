import React from 'react'
import './styles.css'
import { Routes, Route } from 'react-router-dom'
import Root from './pages/root.jsx'

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Root />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App