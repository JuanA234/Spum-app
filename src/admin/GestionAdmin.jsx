import React from 'react'
import { Link } from 'react-router'

export default function GestionAdmin() {
  return (
      <div className='container'>
        <h3>Gestion usuarios</h3>
    <div>
         <Link to="/admin/usuarios/crear" className="btn btn-dark btn-sm me-3">Agregar usuario</Link>
    </div>
    <table className="table table-striped table-bordered table-hover align-middle"> 
  <thead className='table-dark'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe</td>
      <td>@social</td>
    </tr>
    
  </tbody>
</table>
    </div>
  )
}
