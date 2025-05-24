import React from "react";

export default function DashboardInventario() {
  const juegos = [
    { nombre: "Monopoly", codigo: "J001" },
    { nombre: "Uno", codigo: "J002" },
    { nombre: "Ajedrez", codigo: "J003" },
    { nombre: "Risk", codigo: "J004" },
    { nombre: "Scrabble", codigo: "J005" }
  ];

  return (
    <div>
      <header>
        <h1>Inventario de Juegos de Mesa</h1>
      </header>
      <div className="container">
        <div className="actions-container">
          <button onClick={() => alert("Añadir artículo")}>Añadir Artículo</button>
          <button onClick={() => alert("Eliminar artículo")}>Eliminar Artículo</button>
          <button onClick={() => alert("Editar artículo")}>Editar Artículo</button>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Nombre del Juego</th>
                <th>Código</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {juegos.map((juego, index) => (
                <tr key={index}>
                  <td>{juego.nombre}</td>
                  <td>{juego.codigo}</td>
                  <td className="actions">
                    <i className="fas fa-edit" onClick={() => alert(`Editar ${juego.nombre}`)}></i>
                    <i className="fas fa-trash-alt" onClick={() => alert(`Eliminar ${juego.nombre}`)}></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}