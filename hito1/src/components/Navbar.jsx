import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./contexts/CartContext";
import { UserContext } from "./contexts/UserContext";

export default function Navbar() {  
  const {total} = useContext(CartContext)
  const {token, logout} = useContext(UserContext)
  
  const formattedPrice = total.toLocaleString("es-CL");

  const ButtonStyle = (isActive) =>
  {
      return isActive 
          ? "btn btn-warning btn-sm mx-1"
          : "btn btn-outline-light btn-sm mx-1";
  }

  const ButtonCartStyle = (isActive) =>
  {
      return isActive 
          ? "btn btn-info btn-sm ms-3"
          : "btn btn-outline-info btn-sm ms-3";
  }

  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <h4 className="navbar-brand" href="#">Pizzería Mamma Mia!</h4>
      <div className="ms-auto d-flex align-items-center">
        <NavLink to="/" className={({isActive}) => ButtonStyle(isActive)}>Home</NavLink>
        {token ? 
        <NavLink to="/profile" className={({isActive}) => ButtonStyle(isActive)}>Profile</NavLink> : 
        <NavLink to="/login" className={({isActive}) => ButtonStyle(isActive)}>Login</NavLink>
        }
        {token ? 
        <button className="btn btn-outline-light btn-sm mx-1" onClick={() => logout()}>Logout</button> :
        <NavLink to="/register" className={({isActive}) => ButtonStyle(isActive)}>Register</NavLink>
        }
        <NavLink to="/cart" className={({isActive}) => ButtonCartStyle(isActive)}>
          <i className="bi bi-cart"></i> total: ${formattedPrice}
        </NavLink>
      </div>
    </div>
  </nav>
  )
}