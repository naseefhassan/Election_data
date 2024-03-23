import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Components/Auth/Signup'

function Auth() {
  return (
  <>
  <Routes>
    <Route path='/signup' element={<Signup/>}></Route>
  </Routes>
  </>
  )
}

export default Auth