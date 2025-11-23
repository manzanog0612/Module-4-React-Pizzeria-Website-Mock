import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h1 className="display-1 fw-bold">404</h1>
      <h2 className="mb-3">Página no encontrada</h2>
      <p className="mb-4">
        Parece que esta ruta no existe...
      </p>
      <Link to="/" className="btn btn-primary btn-lg">
        Volver al inicio
      </Link>
    </div>
  );
}