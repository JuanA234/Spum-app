import React from 'react'

export default function UnauthorizedPage() {
  return (
   <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
      <h1 className="display-1 fw-bold text-warning">403</h1>
      <h3 className="mb-3">Acceso No Autorizado</h3>
      <p className="text-muted">No tienes permiso para acceder a esta página.</p>
      <a href="/" className="btn btn-primary mt-3">Volver al Inicio</a>
    </div>
  )
}
