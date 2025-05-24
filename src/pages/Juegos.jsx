import { Link } from "react-router-dom";
import Footer from "../components/footer";

export default function Juegos() {
    return(
    <div>
      <header>
        <h1>
          <span role="img" aria-label="Préstamo de Artículos">🎲</span>{" "}
          Préstamo de Artículos
        </h1>
        <nav>
          <ul className="nav-list">
            <li><Link to="/inicio">Inicio</Link></li>
            <li><Link to="/juegos">Juegos Disponibles</Link></li>
            <li><Link to="/prestamos">Mis Préstamos</Link></li>
            <li className="search-container">
              <input
                type="text"
                placeholder="Buscar juegos..."
                className="search-input"
              />
              <button className="search-button">Buscar</button>
            </li>
          </ul>
        </nav>
      </header>

      <section className="lista-juegos">
        <h2>Lista de Artículos</h2>
        <div className="juegos-container">
          <div className="juego">
            <img
              src="../assets/ajedrez.png"
              alt="Ajedrez - Juego de estrategia para 2 jugadores"
              width="80"
            />
            <h3>Ajedrez</h3>
            <p>Estrategia para 2 jugadores.</p>
            <Link to="/solicitud" className="btn">Ver Detalles</Link>
          </div>

          <div className="juego">
            <img
              src="../assets/Monopoly-Emblem.png"
              alt="Monopoly - Clásico juego de estrategia"
              width="80"
            />
            <h3>Monopoly</h3>
            <p>Clásico juego de estrategia.</p>
            <Link to="/solicitud" className="btn">Ver Detalles</Link>
          </div>
        </div>
      </section>
    </div>
    );
}