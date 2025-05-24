import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="card text-center">
        <div className="card-body  bg-dark text-white ">
          <h5 className="card-title"> Universidad del Magdalena - Préstamo de Artículos</h5>
            <p className="card-text mb-2">
          &copy; 2025 Universidad del Magdalena
        </p>
        <p className="card-text">
          <Link to="/politica-privacidad" className="text-decoration-none text-info me-2">
            Política de Privacidad
          </Link>
          |
          <Link to="/terminos-uso" className="text-decoration-none text-info ms-2">
            Términos de Uso
          </Link>
        </p>
        </div>
      </div>
    </>
  );
}
