import React from 'react'

export default function NotFound() {
  return (
   <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h3 className="mb-3">Página No Encontrada</h3>
      <p className="text-muted">Lo sentimos, la página que estás buscando no existe.</p>
      <a href="/" className="btn btn-primary mt-3">Volver al Inicio</a>
    </div>

  )
}
