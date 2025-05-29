import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AdminDashboard() {
  const urlBase = "http://localhost:8080/users";

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    try {
     const token = localStorage.getItem("token");
      const response = await axios.get(urlBase, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Resultado de cargar usuarios:", response.data);
      setUsuarios(response.data);
  } catch (error) {
    if (error.response) {
      console.error("Error de respuesta:", error.response.data);
      console.error("Status:", error.response.status);
      console.error("Headers:", error.response.headers);
    } else if (error.request) {
      console.error("No se recibió respuesta:", error.request);
    } else {
      console.error("Error al configurar la petición:", error.message);
    }
  }
  };

  return (
    <div className="container">
      <div style={{ margin: "" }}>
        <h3>Usuarios registrados</h3>
      </div>
      <table className="table table-striped table-bordered table-hover align-middle">
        <thead className="">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, indice) => (
            <tr key={indice}>
              <th scope="row">{usuario.id}</th>
              <td>{usuario.name}</td>
              <td>{usuario.lastName}</td>
              <td>{usuario.email}</td>
              <td>{usuario.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
