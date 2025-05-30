import axios from "axios";
import React, { useState } from "react";

export default function Penalizar() {
  const [codigo, setCodigo] = useState("");
  const [usuarioEncontrado, setUsuarioEncontrado] = useState(null);
    const urlPenalty = "http://localhost:8080/penalties"
    const [penalties, setPenalties] = useState([]);
    const [newPenalty, setNewPenalty] = useState({
        description: "",
        penaltyDate: "",
        penaltyType: 0,
        email: ""
    })


  const baseUsuarios = {
    UC123456: "Juan Pérez",
    UC654321: "María Gómez",
    UC789123: "Carlos Rodríguez",
    UC456789: "Ana López",
  };

  const buscarUsuario = () => {
    const nombre = baseUsuarios[codigo.trim()];
    if (nombre) {
      setUsuarioEncontrado({ codigo: codigo.trim(), nombre });
    } else {
      alert("Usuario no encontrado");
      setUsuarioEncontrado(null);
    }
  };

    const cargarItems = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(urlPenalty, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Resultado de cargar penalizaciones:", response.data);
      setPenalties(response.data);
    } catch (error) {
      if (error.response) {
        console.error("Error de respuesta:", error.response.data);
      } else if (error.request) {
        console.error("No se recibió respuesta:", error.request);
      } else {
        console.error("Error al configurar la petición:", error.message);
      }
    }
  };

  const penalizarUsuario = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(urlPenalty, newPenalty, {
        headers: {
          Authorization: `Bearer ${token}}`,
        },
      });
      setNewPenalty({
        description: newPenalty.description,
        penaltyDate: newPenalty.penaltyDate,
        penaltyType: newPenalty.penaltyType,
        email: newPenalty.email           
      });
      cargarItems(); // Recargar lista
    } catch (error) {
      console.error("Error al crear item", error);
    }
  };

  return (
    <div>
      <header>
        <h1>Gestión de Penalizaciones</h1>
      </header>

      <div className="container">
        <h2>Buscar Usuario</h2>
        <input
          type="text"
          placeholder="Ingrese código universitario"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />
        <button onClick={buscarUsuario}>Buscar</button>

        {usuarioEncontrado && (
          <div className="user-info">
            <p>
              <strong>Nombre:</strong> <span>{usuarioEncontrado.nombre}</span>
            </p>
            <p>
              <strong>Código:</strong> <span>{usuarioEncontrado.codigo}</span>
            </p>
            <button className="reject" onClick={penalizarUsuario}>
              Penalizar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}