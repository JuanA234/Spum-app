import React from "react";
import { Link } from "react-router-dom";

export default function DashboardInventario() {
  const juegos = [
    { nombre: "Monopoly", codigo: "J001" },
    { nombre: "Uno", codigo: "J002" },
    { nombre: "Ajedrez", codigo: "J003" },
    { nombre: "Risk", codigo: "J004" },
    { nombre: "Scrabble", codigo: "J005" },
  ];

  return (
    <div>
      <header className="bg-dark text-white py-3">
        <div className="container text-center">
          <h1 className="m-0 text-white fw-bold">
            Inventario de Juegos de Mesa
          </h1>
        </div>
      </header>

      <div className="container">
        <div className="text-center my-4 justify-content-between"> 
          <button className="btn text-white m-1"
          onClick={() => alert("Añadir artículo")}
          style={{background:"#6610f2"}}>
            Añadir Artículo
          </button>
          <button className="btn text-white m-1" 
          onClick={() => alert("Eliminar artículo")}
          style={{background:"#6610f2"}}
          >
            Eliminar Artículo
          </button>
          <button className="btn text-white m-1"
          onClick={() => alert("Editar artículo")}
          style={{background:"#6610f2"}}>
            Editar Artículo
          </button>
        </div>
        <div className="">
          <table className="table">
            <thead>
              <tr>
                <th scope="scol">Nombre del Juego</th>
                <th scope="col">Código</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {juegos.map((juego, index) => (
                <tr key={index}>
                  <td>{juego.nombre}</td>
                  <td>{juego.codigo}</td>
                  <td className="actions">
                    <i
                      className="fas fa-edit"
                      onClick={() => alert(`Editar ${juego.nombre}`)}
                    ></i>
                    <i
                      className="fas fa-trash-alt"
                      onClick={() => alert(`Eliminar ${juego.nombre}`)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
       <div className="text-center mt-4">
          <Link to="/auxiliar"className="btn text-white" style={{background:"#6610f2"}}>Regresar</Link>
        </div>
    </div>
  );
}
