import React from "react";
import { Link, Outlet } from "react-router";
import LogoutButton from "../../components/LogoutButton";

export default function SideBar() {
  return (
      <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <nav className="col-md-3 col-lg-2 d-md-block text-white sidebar p-3 min-vh-100 bg-primary">
          <h4 className="text-white">🎲 SPUM</h4>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/admin" className="nav-link text-white">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/usuarios" className="nav-link text-white">Gestionar usuarios</Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/penalizaciones" className="nav-link text-white">Consultar penalizaciones</Link>
            </li>
             <li className="nav-item">
              <Link to="/admin/configuracion" className="nav-link text-white">Configuracion</Link>
            </li>
             <li className="nav-item">
              <LogoutButton />
            </li>
          </ul>
        </nav>

        {/* Contenido principal */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
          <Outlet /> {/* Aquí se renderiza el contenido de cada ruta */}
        </main>
      </div>
    </div>
  );
}
