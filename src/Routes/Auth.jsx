import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Components/Auth/Signup'
import Home from '../Pages/Home'

function Auth() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Signup/>}></Route>'
    <Route path='/home' element={<Home/> }></Route>'
  </Routes>
  </>
  )
}

export default Auth