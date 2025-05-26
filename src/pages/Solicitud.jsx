import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/footer";
import LogoutButton from "../components/LogoutButton";

export default function SolicitarPrestamo() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    juego: "ajedrez",
    fecha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías manejar el envío con fetch/axios o context etc.
    console.log("Datos enviados:", formData);
    alert("Solicitud enviada (simulación)");
  };

  return (
    <div style={{ backgroundColor: "#f3f4f6" }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand">📋 Solicitar Préstamo</span>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/inicio" className="nav-link">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/juegos" className="nav-link">
                  Juegos Disponibles
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/prestamos" className="nav-link active">
                  Mis Préstamos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/penalizaciones" className="nav-link">
                  Penalizaciones
                </Link>
              </li>
              <li className="nav-item">
              <LogoutButton/>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section
        className="container d-flex justify-content-center align-items-center my-4"
        
      >
        <div
          className="card p-4"
          style={{
            maxWidth: "500px",
            width: "100%",
            borderRadius: "1rem",
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h4 className="mb-4 fw-bold text-center">Formulario de Solicitud de Préstamo</h4>
          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label htmlFor="nombre" className="form-label fw-bold">Nombre:</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                 placeholder="Ingresa tu nombre"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="correo" className="form-label fw-bold">Correo Electrónico:</label>
              <input
                type="email"
                className="form-control"
                id="correo"
                name="correo"
                required
                value={formData.correo}
                onChange={handleChange}
                placeholder="nombre@correo.com"

              />
            </div>

            <div className="mb-3">
              <label htmlFor="juego" className="form-label fw-bold">Juego a Solicitar:</label>
              <select
              className="form-select"
                id="juego"
                name="juego"
                required
                value={formData.juego}
                onChange={handleChange}
              >
                <option value="ajedrez">Ajedrez</option>
                <option value="monopoly">Monopoly</option>
                <option value="catan">Catan</option>
                {/* Puedes agregar más opciones aquí */}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="fecha" className="form-label fw-bold">Fecha de Préstamo:</label>
              <input
                type="date"
                className="form-control"
                id="fecha"
                name="fecha"
                required
                value={formData.fecha}
                onChange={handleChange}
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn fw-bold" style={{ backgroundColor: '#e67e22', color: 'white' }}>
                Enviar Solicitud
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
