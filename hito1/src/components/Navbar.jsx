export default function Navbar() {
   const total = 25000;
   const token = true;
   const formattedPrice = total.toLocaleString("es-CL");
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand" href="#">Pizzería Mamma Mia!</a>
      <div className="ms-auto d-flex align-items-center">
        <a href="#" className="btn btn-warning btn-sm mx-1">Home</a>
        {token ? 
        <a href="#" className="btn btn-outline-light btn-sm mx-1">Profile</a> : 
        <a href="#" className="btn btn-outline-light btn-sm mx-1">Login</a>
        }
        {token ? 
        <a href="#" className="btn btn-outline-light btn-sm mx-1">Logout</a> :
        <a href="#" className="btn btn-outline-light btn-sm mx-1">Register</a>
        }
        <button className="btn btn-outline-info btn-sm ms-3">
          <i className="bi bi-cart"></i> total: ${formattedPrice}
        </button>
      </div>
    </div>
  </nav>
  )
}