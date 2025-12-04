import { NavLink } from "react-router-dom";

export default function CardPizza({id, name, price, ingredients, img, onAddToCart}) {
  const formattedPrice = price.toLocaleString("es-CL");

  return (
    <div className="col-md-4">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title text-start">{name}</h5>

          <hr className="divider" />

          <p className="text-muted mb-1 text-center">Ingredientes:</p>
          <p className="mb-2 text-center list-unstyled">
            {
              ingredients.map((ingredient, index) => (
                <li key={index}>🍕 {ingredient}</li>
              ))
            }</p>

          <hr className="divider" />

          <h5 className="text-dark fw-bold mt-3 mb-3 text-center">
            Precio: ${formattedPrice}
          </h5>

          <div className="d-flex justify-content-center gap-2">
            <NavLink to={"/pizzas/" + id}  className="btn btn-outline-dark btn-sm">Ver Más</NavLink>
            <button href="#" className="btn btn-dark btn-sm" onClick={onAddToCart}>
              Añadir 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}