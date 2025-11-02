import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import RegistrerPage from './components/RegistrerPage'
import LoginPage from './components/LoginPage'
import './App.css'
import React, {useState} from 'react'

function App() {
  return (
    <>
      <Navbar/>
      {/*<Home/>*/}
      {/*<RegistrerPage/>*/}
      <LoginPage/>
      <Footer/>
    </>
  )
}

export default App
