import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/footer";

export default function SolicitarPrestamo() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    juego: "ajedrez",
    fecha: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías manejar el envío con fetch/axios o context etc.
    console.log("Datos enviados:", formData);
    alert("Solicitud enviada (simulación)");
  };

  return (
    <div>
      <header>
        <h1>
          <span role="img" aria-label="Solicitar Préstamo">📋</span> Solicitar Préstamo
        </h1>
        <nav>
          <ul>
            <li><Link to="/inicio">Inicio</Link></li>
            <li><Link to="/juegos">Juegos Disponibles</Link></li>
            <li><Link to="/mis-prestamos">Mis Préstamos</Link></li>
            <li><Link to="/mis-penalizaciones">Penalizaciones</Link></li>
            <li><Link to="/">Cerrar Sesión</Link></li>
          </ul>
        </nav>
      </header>

      <section className="solicitud">
        <h2>Formulario de Solicitud de Préstamo</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="correo">Correo Electrónico:</label>
            <input
              type="email"
              id="correo"
              name="correo"
              required
              value={formData.correo}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="juego">Juego a Solicitar:</label>
            <select
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

          <div className="form-group">
            <label htmlFor="fecha">Fecha de Préstamo:</label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              required
              value={formData.fecha}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn">Enviar Solicitud</button>
          </div>
        </form>
      </section>
    </div>
  );
}