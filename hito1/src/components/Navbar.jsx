export default function Navbar() {
   const total = 25000;
   const token = true;
   const formattedPrice = total.toLocaleString("es-CL");
  return (
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Pizzería Mamma Mia!</a>
      <div class="ms-auto d-flex align-items-center">
        <a href="#" class="btn btn-warning btn-sm mx-1">Home</a>
        {token ? 
        <a href="#" class="btn btn-outline-light btn-sm mx-1">Profile</a> : 
        <a href="#" class="btn btn-outline-light btn-sm mx-1">Login</a>
        }
        {token ? 
        <a href="#" class="btn btn-outline-light btn-sm mx-1">Logout</a> :
        <a href="#" class="btn btn-outline-light btn-sm mx-1">Register</a>
        }
        <button class="btn btn-outline-info btn-sm ms-3">
          <i class="bi bi-cart"></i> total: ${formattedPrice}
        </button>
      </div>
    </div>
  </nav>
  )
}