export default function CardPizza(props) {
  const formattedPrice = props.price.toLocaleString("es-CL");
  return (
    <div className="col-md-4">
      <div className="card h-100">
        <img src={props.img} className="card-img-top" alt={props.name} />
        <div className="card-body">
          <h5 className="card-title text-start">{props.name}</h5>

          <hr className="divider" />

          <p className="text-muted mb-1 text-center">Ingredientes:</p>
          <p className="mb-2 text-center">🍕 {props.ingredients.join(", ")}</p>

          <hr className="divider" />

          <h5 className="text-dark fw-bold mt-3 mb-3 text-center">
            Precio: ${formattedPrice}
          </h5>

          <div className="d-flex justify-content-center gap-2">
            <a href="#" className="btn btn-outline-dark btn-sm">
              Ver Más
            </a>
            <a href="#" className="btn btn-dark btn-sm">
              Añadir 🛒
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}