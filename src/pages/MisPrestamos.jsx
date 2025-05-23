import { Link } from "react-router-dom";
import "../index.css";
import Footer from "../components/footer";

export default function MisPrestamos() {
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

      <section className="prestamos">
        <h2>Lista de Préstamos</h2>
        <div className="prestamos-container">
          <div className="prestamo-card">
            <h3>Catan</h3>
            <p><strong>Fecha de Préstamo:</strong> 12/03/2024</p>
            <p><strong>Fecha de Devolución:</strong> 19/03/2024</p>
          </div>
          <div className="prestamo-card">
            <h3>Monopoly</h3>
            <p><strong>Fecha de Préstamo:</strong> 15/03/2024</p>
            <p><strong>Fecha de Devolución:</strong> 22/03/2024</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}