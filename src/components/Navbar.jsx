import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand">
            🎲 Préstamo de Artículos
          </span>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/inicio" className="nav-link">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to="/juegos" className="nav-link">Juegos Disponibles</Link>
              </li>
              <li className="nav-item">
                <Link to="/prestamos" className="nav-link active">Mis Préstamos</Link>
              </li>
              <li className="nav-item">
                <Link to="/penalizaciones" className="nav-link">Penalizaciones</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">Cerrar Sesión</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

  )
}
