import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './components/Home'
//import RegistrerPage from './components/RegistrerPage'
//import LoginPage from './components/LoginPage'
import Cart from './components/Cart'
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      {/*<RegistrerPage/>*/}
      {/*<LoginPage/>*/}
      <Cart/>
      <Footer/>
    </>
  )
}

export default App
