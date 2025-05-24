import React from "react";
import monopolyImg from "../assets/Monopoly-Emblem.png";

export default function Inicio() {
  return (
    <div className="inicio-container">

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
