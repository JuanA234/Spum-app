import React from "react";
import { Link } from "react-router-dom";

export default function DashboardInventario() {
  return (
    <div>
      <header className="bg-primary py-3">
        <div className="container text-center">
          <h1 className="m-0 text-white fw-bold">
            Inventario de Juegos de Mesa
          </h1>
        </div>
      </header>

      <div className="container">
        <div className="mb-4 d-flex justify-content-center gap-3 flex-wrap my-3">
          <button
            className="btn btn-primary fw-semibold px-4 py-2 shadow-sm"
            style={{ background: "#6a00ff", border: "none" }}
            onMouseEnter={(e) => (e.target.style.background = "#5200cc")}
            onMouseLeave={(e) => (e.target.style.background = "#6a00ff")}
          >
            Añadir Artículo
          </button>
          <button className="btn btn-danger fw-semibold px-4 py-2 shadow-sm">
            Eliminar Artículo
          </button>

          <button
            className="btn btn-warning fw-semibold px-4 py-2 shadow-sm text-white"
            onMouseEnter={(e) => (e.target.style.background = "#d97706")}
            onMouseLeave={(e) => (e.target.style.background = "#f59e0b")}
          >
            Editar Artículo
          </button>
        </div>
        <div className="">
     
      <table className="table table-striped table-hover align-middle">
        <thead className="table-dark">
          <tr>
            <th>Nombre del Juego</th>
            <th>Código</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Monopoly</td><td>J001</td><td>-</td></tr>
          <tr><td>Uno</td><td>J002</td><td>-</td></tr>
          <tr><td>Ajedrez</td><td>J003</td><td>-</td></tr>
          <tr><td>Risk</td><td>J004</td><td>-</td></tr>
          <tr><td>Scrabble</td><td>J005</td><td>-</td></tr>
        </tbody>
      </table>
        </div>
      </div>
      <div className="text-center mt-4">
        <Link
          to="/auxiliar"
          className="btn btn-secondary px-4 py-2 shadow-sm"
          onMouseEnter={(e) => (e.target.style.background = "#6c757d")}
          onMouseLeave={(e) => (e.target.style.background = "#adb5bd")}
        >
          Regresar
        </Link>
      </div>
    </div>
  );
}
