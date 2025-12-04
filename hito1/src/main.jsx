import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './components/contexts/CartContext.jsx'
import { UserContextProvider } from './components/contexts/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <UserContextProvider>
          <App/>
        </UserContextProvider>
      </CartContextProvider>        
    </BrowserRouter>    
  </StrictMode>
)
