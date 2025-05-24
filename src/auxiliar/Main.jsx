import React from "react";
import { Link } from "react-router-dom";

export default function MainAuxiliar() {
  return (
    <>
      {/* Header a pantalla completa */}
      <header className="bg-dark text-white py-3">
        <div className="d-flex justify-content-between align-items-center container">
          <h1 className="m-0 text-white fw-bold">SPUM</h1>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Cerrar Sesión
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="container py-5">
        <section className="text-center">
          <div className="p-4">
            <h2 className="mb-4 text-dark fw-bold">ACCIONES</h2>
            <div className="row g-3">
              <div className="col-md-4">
                <Link to="solicitudes">
                  <button className="btn btn-primary w-100">
                    VER SOLICITUDES DE PRÉSTAMOS
                  </button>
                </Link>
              </div>
              <div className="col-md-4">
                <Link to="penalizar">
                  <button className="btn btn-warning w-100">
                    PENALIZAR USUARIO
                  </button>
                </Link>
              </div>
              <div className="col-md-4">
                <Link to="inventario">
                  <button className="btn btn-success w-100">INVENTARIO</button>
                </Link>
              </div>
              <div className="col-md-4">
                <Link to="devolucion">
                  <button className="btn btn-info w-100">
                    REGISTRAR DEVOLUCIÓN
                  </button>
                </Link>
              </div>
              <div className="col-md-4">
                <Link to="historial">
                  <button className="btn btn-secondary w-100">
                    HISTORIAL DE PRÉSTAMOS
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
