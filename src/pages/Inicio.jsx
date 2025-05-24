import React from "react";
import "./inicio.css";
import monopolyImg from "../assets/monopoly.png";

export default function Inicio() {
  return (
    <div className="inicio-container">
      <header className="inicio-header">
        <h1>🎲 Préstamo de Artículos</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Inicio</a></li>
            <li><a href="/juegos">Juegos Disponibles</a></li>
            <li><a href="/prestamos">Mis Préstamos</a></li>
            <li><a href="/penalizaciones">Penalizaciones</a></li>
            <li><a href="/login">Cerrar Sesión</a></li>
          </ul>
        </nav>
      </header>

      <main className="inicio-main">
        <h2>Descubre y solicita artículos fácilmente</h2>
        <img src={monopolyImg} alt="Monopoly" className="inicio-img" />
        <a href="/juegos" className="inicio-btn">Explorar Juegos</a>
      </main>

      <footer className="inicio-footer">
        <p>&copy; 2025 Universidad del Magdalena - Préstamo de Artículos</p>
        <p>
          <a href="/privacidad">Política de Privacidad</a> | <a href="/terminos">Términos de Uso</a>
        </p>
      </footer>
    </div>
  );
}
