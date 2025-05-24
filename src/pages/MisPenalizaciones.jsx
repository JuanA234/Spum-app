import { Link } from "react-router-dom";
import "../index.css";
import Footer from "../components/Footer";

export default function Penalizaciones() {
  return (
    <div>
      <header>
        <h1>
          <span role="img" aria-label="Préstamo de Artículos">🎲</span>{" "}
          Préstamo de Artículos
        </h1>
        <nav>
          <ul>
            <li><Link to="/inicio">Inicio</Link></li>
            <li><Link to="/juegos">Juegos Disponibles</Link></li>
            <li><Link to="/mis-prestamos">Mis Préstamos</Link></li>
            <li><Link to="/mis-penalizaciones">Penalizaciones</Link></li>
            <li><Link to="/">Cerrar Sesión</Link></li>
          </ul>
        </nav>
      </header>

      <section className="penalizaciones">
        <h2>Lista de Penalizaciones</h2>
        <div className="penalizaciones-container">
          <div className="penalizacion-card">
            <p><strong>Fecha: </strong>17/03/2025</p>
            <p><strong>Motivo: </strong>Entrega tardía de elemento</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}