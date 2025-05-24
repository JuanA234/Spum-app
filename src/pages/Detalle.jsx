import { Link } from "react-router-dom";
import Footer from "../components/footer";

export default function Detalle() {
    return(
      <div>
        <header>
        <h1>
          <span role="img" aria-label="Detalles del Artículo">🎲</span>{" "}
          Detalles del Artículo
        </h1>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/juegos">Artículos Disponibles</Link></li>
            <li><Link to="/mis-prestamos">Mis Préstamos</Link></li>
          </ul>
        </nav>
      </header>

      <section className="detalle-juego">
        <img src="../assets/catan.jpg" alt="Catan - Juego de estrategia para 3-4 jugadores" />
        <h2>Catan</h2>
        <p>Juego de estrategia donde debes comerciar y construir.</p>
        <p><strong>Jugadores:</strong> 3-4</p>
        <p><strong>Duración:</strong> 60-90 minutos</p>
        <Link to="/mis-prestamos" className="btn">Solicitar Préstamo</Link>
      </section>
      </div>    
    );
}