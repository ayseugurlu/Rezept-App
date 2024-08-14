import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Login from '../pages/login/Login'
import Details from '../pages/details/Details'

const AppRouter = () => {
  return (
    <Router>
        <Navbar/>

        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/details" element={<Details/>} />


        </Routes>


    </Router>
  )
}

export default AppRouter