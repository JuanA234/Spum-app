import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export default function GestionAdmin() {
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

  const eliminarUsuario = async (id) => {
    if (!window.confirm("¿Estás seguro de que deseas eliminar este usuario?")) return;

  try {
    const token = localStorage.getItem("token");
    await axios.delete(`${urlBase}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Filtrar el usuario eliminado sin recargar todo
    setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
  } catch (error) {
    if (error.response) {
      console.error("Error de respuesta:", error.response.data);
    } else if (error.request) {
      console.error("No se recibió respuesta:", error.request);
    } else {
      console.error("Error al configurar la petición:", error.message);
    }
    alert("Error al eliminar el usuario");
  }
  };

  return (
    <div className="container">
      <h3>Gestion usuarios</h3>
      <div>
        <Link
          to="/admin/usuarios/crear"
          className="btn btn-primary fw-bold m-1"
        >
          Agregar usuario
        </Link>
      </div>
      <table className="table table-striped table-bordered table-hover align-middle">
        <thead className="table-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th></th>
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
              <td className="text-center">
                <div>
                  <button
                    onClick={() => {
                      eliminarUsuario(usuario.id);
                    }}
                    className="btn btn-danger btn-sm"
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
