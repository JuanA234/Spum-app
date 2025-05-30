import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterUser() {
  const urlBase = "http://localhost:8080/auth/register-user";
  let navegacion = useNavigate();

  const [usuario, setUsuario] = useState({
    userName: "",
    userLastName: "",
    email: "",
    password: "",
    role: "",
  });

  const { userName, userLastName, email, password, role } = usuario;

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onInputChange = (event) => {
    setUsuario({
      ...usuario,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    
    setError("");
    setSuccess("");

    try {
    const token = localStorage.getItem("token");

      const response = await axios.post(urlBase, usuario, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status === 201) {
        setSuccess(response.data.message);
        setTimeout(() => {
          navegacion("/admin/usuarios");
        }, 2000);
      } else {
        setError(response.data.message || "Error al crear la cuenta");
      }
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Error en el registro, por favor intente más tarde");
      }
      console.error("Error detallado:", err);
    }
  };

  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ margin: "30px" }}
      >
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          <div className="card p-4 shadow">
            <h3 className="text-center mb-4">Crear cuenta</h3>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            {success && (
              <div className="alert alert-success" role="alert">
                {success}
              </div>
            )}
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  name="userName"
                  required={true}
                  value={userName}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="apellido" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="userLastName"
                  name="userLastName"
                  required={true}
                  value={userLastName}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required={true}
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contrasena" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  required={true}
                  value={password}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="role" className="form-label">
                  Rol
                </label>
                <select
                  className="form-select"
                  id="role"
                  name="role"
                  required={true}
                  value={role}
                  onChange={onInputChange}
                >
                  <option value="">Seleccione un rol</option>
                  <option value="STUDENT">Estudiante</option>
                  <option value="ASSISTANT">Auxiliar</option>
                </select>
              </div>
              <div className="mb-3 text-center">
                <button type="submit" className="btn btn-success">
                  Crear cuenta
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
