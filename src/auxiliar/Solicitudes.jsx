import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Solicitudes() {
  const [visibleOptions, setVisibleOptions] = useState(null);

  const solicitudes = [
    { nombre: "Juan Pérez", codigo: "UC123456", item: "Juego Uno" },
    { nombre: "María Gómez", codigo: "UC654321", item: "Ajedrez" },
    { nombre: "Carlos Rodríguez", codigo: "UC789123", item: "Dominó" },
    { nombre: "Ana López", codigo: "UC456789", item: "Parqué" },
  ];

  const toggleOptions = (index) => {
    setVisibleOptions(visibleOptions === index ? null : index);
  };

  return (
    <div>
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

      <div className="container py-4">
        <h2 className="mb-4 text-center">Lista de solicitudes pendientes</h2>
        <div className="row g-4">
          {solicitudes.map((solicitud, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title text-primary">
                    {solicitud.nombre}
                  </h5>
                  <p className="card-text mb-1">
                    <strong>Código:</strong> {solicitud.codigo}
                  </p>
                  <p className="card-text mb-3">
                    <strong>Artículo:</strong> {solicitud.item}
                  </p>

                  {visibleOptions === index ? (
                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-success"
                    
                      >
                        Aprobar
                      </button>
                      <button
                        className="btn btn-danger"
                   
                      >
                        Rechazar
                      </button>
                    </div>
                  ) : (
                    <button
                      className="btn btn-outline-secondary w-100"
                      onClick={() => toggleOptions(index)}
                    >
                      Mostrar Opciones
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="/auxiliar"className="btn text-white" style={{background:"#6610f2"}}>Regresar</Link>
        </div>
      </div>
    </div>
  );
}
