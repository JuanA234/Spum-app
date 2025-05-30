import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";

export default function MainAuxiliar() {
  return (
    <>
      {/* Header a pantalla completa */}
      <header className="bg-primary py-3">
        <div className="d-flex justify-content-between align-items-center container">
          <h1 className=" text-white fw-bold">🎲SPUM</h1>
          <ul className="nav">
            <li className="nav-item">
             <LogoutButton/>
            </li>
          </ul>
        </div>
      </header>
      <div className="container d-flex justify-content-center align-items-center my-5">
        <section className="text-center w-75">
          <div className="p-4 bg-light rounded shadow">
            <h2 className="mb-4 text-primary fw-bold">ACCIONES</h2>
            <div className="list-group">
              <Link
                to="solicitudes"
                className="list-group-item list-group-item-action"
                style={{
                  backgroundColor: "#e7f0ff",
                  color: "#003366",
                  fontWeight: "500",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#cfe2ff";
                  e.target.style.color = "#002244";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#e7f0ff";
                  e.target.style.color = "#003366";
                }}
              >
                VER SOLICITUDES DE PRÉSTAMOS
              </Link>

              <Link
                to="penalizar"
                className="list-group-item list-group-item-action"
                style={{
                  backgroundColor: "#fff4cc",
                  color: "#664d00",
                  fontWeight: "500",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#ffe599";
                  e.target.style.color = "#4d3d00";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#fff4cc";
                  e.target.style.color = "#664d00";
                }}
              >
                PENALIZAR USUARIO
              </Link>

              <Link
                to="inventario"
                className="list-group-item list-group-item-action"
                style={{
                  backgroundColor: "#d9f2e6",
                  color: "#004d33",
                  fontWeight: "500",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#c1e9d6";
                  e.target.style.color = "#003f29";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#d9f2e6";
                  e.target.style.color = "#004d33";
                }}
              >
                INVENTARIO
              </Link>

              <Link
                to="devolucion"
                className="list-group-item list-group-item-action"
                style={{
                  backgroundColor: "#d6f6ff",
                  color: "#005f73",
                  fontWeight: "500",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#b9ecf5";
                  e.target.style.color = "#004c5a";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#d6f6ff";
                  e.target.style.color = "#005f73";
                }}
              >
                REGISTRAR DEVOLUCIÓN
              </Link>

              <Link
                to="historial"
                className="list-group-item list-group-item-action"
                style={{
                  backgroundColor: "#e0e0e0",
                  color: "#333",
                  fontWeight: "500",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#d0d0d0";
                  e.target.style.color = "#111";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#e0e0e0";
                  e.target.style.color = "#333";
                }}
              >
                HISTORIAL DE PRÉSTAMOS
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
