import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navegacion = useNavigate();

  const [estudiante, setEstudiante] = useState({
    email: "",
    password: "",
  });

  const { email, password } = estudiante;
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onInputChange = (event) => {
    setEstudiante({
      ...estudiante,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const urlBase = "http://localhost:8080/auth/login";
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(urlBase, estudiante);

      if (response.status === 200) {
        setSuccess(response.data.message);
        localStorage.setItem("token", response.data.token);
        setTimeout(() => {
          navegacion("/admin");
        }, 1000);
      } else {
        setError(response.data.message || "Error al iniciar sesión");
      }
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Error en el inicio de sesión, por favor intente más tarde");
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
            <h3 className="text-center mb-4">Iniciar sesión</h3>
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
            <form>
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
                  Password
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
              <button type="submit" className="btn btn-success" onClick={handleLogin}>
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
