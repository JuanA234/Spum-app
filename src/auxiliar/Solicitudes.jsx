import React, { useState } from "react";
import "./solicitudes.css";

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
      <header>
        <h1>SPUM</h1>
        <nav>
          <ul>
            <li>Inicio</li>
            <li>Cerrar Sesión</li>
          </ul>
        </nav>
      </header>

      <div className="container">
        <h2>Lista de solicitudes pendientes</h2>
        <ul className="loan-list">
          {solicitudes.map((solicitud, index) => (
            <li
              key={index}
              className="loan-item"
              onClick={() => toggleOptions(index)}
            >
              <span className="name">{solicitud.nombre}</span>
              <span className="code">{solicitud.codigo}</span>
              <span className="item">{solicitud.item}</span>
              {visibleOptions === index && (
                <div className="options">
                  <button className="approve">Aprobar</button>
                  <button className="reject">Rechazar</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}