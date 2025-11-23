import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import RegistrerPage from './components/pages/RegistrerPage'
import LoginPage from './components/pages/LoginPage'
import Cart from './components/pages/Cart'
import Pizza from './components/pages/Pizza'
import NotFound from './components/NotFound'
import Profile from './components/Profile'
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>      
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<RegistrerPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/cart" element={<Cart/>}/> 
        <Route path="/pizza/p001" element={<Pizza/>}/> 
        <Route path="/profile" element={<Profile/>}/> 
        <Route path="/*" element={<NotFound/>}/> 
      </Routes>
      <Footer/>
    </>
  )
}

export default App
