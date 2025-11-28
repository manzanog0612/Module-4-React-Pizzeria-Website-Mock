import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./contexts/CartContext";

export default function Navbar() {  
  const {total} = useContext(CartContext)
  const token = false;
  const formattedPrice = total.toLocaleString("es-CL");

  const navigate = useNavigate();

  const handleCartClick= () =>
  {
      navigate("/cart")
  }

  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <h4 className="navbar-brand" href="#">Pizzería Mamma Mia!</h4>
      <div className="ms-auto d-flex align-items-center">
        <Link to="/" className="btn btn-warning btn-sm mx-1">Home</Link>
        <Link to="/register" className="btn btn-outline-light btn-sm mx-1">Register</Link>
        <Link to="/login" className="btn btn-outline-light btn-sm mx-1">Login</Link>
        <Link to="/profile" className="btn btn-outline-light btn-sm mx-1">Profile</Link> 
        {/*token ? 
        <Link to="/profile" className="btn btn-outline-light btn-sm mx-1">Profile</Link> : 
        <Link to="/login" className="btn btn-outline-light btn-sm mx-1">Login</Link>
        }
        {token ? 
        <Link to="/logout" className="btn btn-outline-light btn-sm mx-1">Logout</Link> :
        <Link to="/register" className="btn btn-outline-light btn-sm mx-1">Register</Link>
        */}
        <button className="btn btn-outline-info btn-sm ms-3" onClick={handleCartClick}>
          <i className="bi bi-cart"></i> total: ${formattedPrice}
        </button>
      </div>
    </div>
  </nav>
  )
}