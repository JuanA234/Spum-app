import React, { useState } from "react";
import "./historial.css";

export default function HistorialPrestamos() {
  const [searchCode, setSearchCode] = useState("");
  
  const data = [
    {
      nombre: "Juan Pérez",
      codigo: "UC123456",
      articulo: "Juego Uno",
      fechaPrestamo: "01/03/2024",
      fechaDevolucion: "05/03/2024"
    },
    {
      nombre: "María Gómez",
      codigo: "UC654321",
      articulo: "Ajedrez",
      fechaPrestamo: "02/03/2024",
      fechaDevolucion: "06/03/2024"
    },
    {
      nombre: "Carlos Rodríguez",
      codigo: "UC789123",
      articulo: "Dominó",
      fechaPrestamo: "03/03/2024",
      fechaDevolucion: "07/03/2024"
    },
    {
      nombre: "Ana López",
      codigo: "UC456789",
      articulo: "Parqué",
      fechaPrestamo: "04/03/2024",
      fechaDevolucion: "08/03/2024"
    }
  ];

  const filteredData = data.filter(entry =>
    entry.codigo.toLowerCase().includes(searchCode.toLowerCase())
  );

  return (
    <div>
      <header>
        <h1>Consultar Historial de Préstamos</h1>
      </header>
      <div className="container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Ingrese código de estudiante..."
            value={searchCode}
            onChange={(e) => setSearchCode(e.target.value)}
          />
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Estudiante</th>
                <th>Código</th>
                <th>Artículo</th>
                <th>Fecha de Préstamo</th>
                <th>Fecha de Devolución</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((entry, index) => (
                  <tr key={index}>
                    <td>{entry.nombre}</td>
                    <td>{entry.codigo}</td>
                    <td>{entry.articulo}</td>
                    <td>{entry.fechaPrestamo}</td>
                    <td>{entry.fechaDevolucion}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No se encontraron resultados.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}