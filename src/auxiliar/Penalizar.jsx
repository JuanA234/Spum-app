import React, { useState } from "react";

export default function Penalizar() {
  const [codigo, setCodigo] = useState("");
  const [usuarioEncontrado, setUsuarioEncontrado] = useState(null);

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

  const penalizarUsuario = () => {
    alert("Usuario penalizado exitosamente");
    setUsuarioEncontrado(null);
    setCodigo("");
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