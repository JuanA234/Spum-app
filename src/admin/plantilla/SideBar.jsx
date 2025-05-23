import React from "react";
import { Link, Outlet } from "react-router";

export default function SideBar() {
  return (
      <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <nav className="col-md-3 col-lg-2 d-md-block bg-dark text-white sidebar p-3 min-vh-100">
          <h4 className="text-white">Mi App</h4>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white">Acerca de</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-white">Contacto</Link>
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
