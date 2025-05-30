import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

export default function Login() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/inicio";

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

  if (!email || !password) {
    setError("Debe completar todos los campos.");
    return;
  }

  try {
    const response = await axios.post(urlBase, estudiante);

    if (response.status === 200) {
      setSuccess("Inicio de sesión exitoso");
      const accessToken = response.data.token;
      const role = response.data.role;
      const email = response.data.email;

      setAuth({ accessToken, role, email }); // Actualiza el contexto de autenticación
      // Almacenar el token y el rol en localStorage

      localStorage.setItem("token", accessToken);
      localStorage.setItem("role", role);
      localStorage.setItem("email", email);

      // Redirigir según el rol
      let targetRoute = ""; // ruta por defecto

      switch (role) {
        case "ADMIN":
          targetRoute = "/admin";
          break;
        case "STUDENT":
          targetRoute = "/inicio";
          break;
        case "ASSISTANT":
          targetRoute = "/auxiliar";
          break;
        default:
          targetRoute = from; // vuelve a la ruta original si no se reconoce el rol
      }

      setTimeout(() => {
        navigate(targetRoute, { replace: true });
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

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  autoComplete="username"
                  required
                  value={email}
                  onChange={onInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={onInputChange}
                />
              </div>
              <button type="submit" className="btn btn-success w-100">
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
