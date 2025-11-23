import { useState, useEffect } from 'react';

export default function Pizza() {
    const apiUrl = "http://localhost:5000/api/pizzas/p001";
      const [pizza, setPizza] = useState({});
    
      const getPizza = async () =>  {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setPizza(data);
        console.log(data);
      }
    
      useEffect(() => {
        getPizza();
      }, []);

  return (
    <div className="container my-5">
      <div className="row align-items-center">

        {/* Imagen */}
        <div className="col-md-6">
          <img
            src={pizza.img}
            alt={pizza.name}
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Información */}
        <div className="col-md-6">
          <h2 className="fw-bold text-capitalize">{pizza.name}</h2>

          <h4 className="text-success fw-bold mt-3">
            Precio: ${pizza.price}
          </h4>

          <h5 className="mt-4">Ingredientes:</h5>
          <ul className="list-unstyled">
            {pizza.ingredients?.map((ing, index) => (
              <li key={index} className="d-flex align-items-center mb-2">
                <span className="me-2">🍕</span> {ing}
              </li>
            ))}
          </ul>

          <h5 className="mt-4">Descripción:</h5>
          <p className="text-secondary">{pizza.desc}</p>
        </div>

      </div>
    </div>
  )
}
