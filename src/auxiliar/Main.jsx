import React from "react";
import { Link } from "react-router-dom";

export default function MainAuxiliar() {
  return (
    <div>
      <header>
        <h1>SPUM</h1>
        <nav>
          <ul>
            <li>Inicio</li>
            <li>Cerrar Sesión</li>
          </ul>
        </nav>
      </header>

      <section>
        <div className="actions-container">
          <h2>ACCIONES</h2>
          <div className="actions-content">
            <Link to="solicitudes">
              <button>VER SOLICITUDES DE PRESTAMOS</button>
            </Link>
            <Link to="penalizar">
              <button>PENALIZAR USUARIO</button>
            </Link>
            <Link to="inventario">
              <button>INVENTARIO</button>
            </Link>
            <Link to="devolucion">
              <button>REGISTRAR DEVOLUCION</button>
            </Link>
             <Link to="historial">
              <button>HISTORIAL DE PRESTAMOS</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}