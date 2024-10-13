import { useState } from 'react'
import './styles/App.css'
import Checkin from './checkin.jsx'
import Login from './login.jsx'
import Home from './routes/home.jsx'
import { Route,Routes } from 'react-router-dom'
function App() {
 

  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/checkin" element={<Checkin/>}/>
    </Routes>
  )
}

export default App
