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
import { UserContext } from './components/contexts/UserContext'
import { useContext } from 'react'
import './App.css'

function App() {

  const {token} = useContext(UserContext)

  return (
    <>
      <Navbar/>
      <Routes>      
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={!token ? <RegistrerPage/> : <Home/>}/>
        <Route path="/login" element={!token ? <LoginPage/> : <Home/>}/>
        <Route path="/cart" element={<Cart/>}/> 
        <Route path="/pizzas/:id" element={<Pizza/>}/> 
        <Route path="/profile" element={ token ? <Profile/> : <LoginPage/> }/> 
        <Route path="/*" element={<NotFound/>}/> 
      </Routes>
      <Footer/>
    </>
  )
}

export default App
