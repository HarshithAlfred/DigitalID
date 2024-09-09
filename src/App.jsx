import { useState } from 'react'
import './App.css'
import Checkin from './checkin.jsx'
import Login from './login.jsx'
import { Route,Routes } from 'react-router-dom'
function App() {
 

  return (
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/checkin" element={<Checkin/>}/>
    </Routes>
  )
}

export default App
