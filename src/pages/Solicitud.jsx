import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LogoutButton from "../components/LogoutButton";
import axios from "axios";

export default function SolicitarPrestamo() {
  let navegacion = useNavigate();
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    itemId: null,
    startTime: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const urlBase = "http://localhost:8080/bookings";

  // Obtener información del ítem
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`http://localhost:8080/items/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setItem(response.data);
      } catch (error) {
        console.error("Error al cargar el artículo:", error);
      }
    };

    fetchItem();
  }, [id]);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");

    setBooking((prev) => ({
      ...prev,
      email: storedEmail || "",
    }));
  }, []);

  // Una vez que se cargue el ítem, establece su ID en booking
  useEffect(() => {
    if (item) {
      setBooking((prev) => ({
        ...prev,
        itemId: item.itemId,
      }));
    }
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    try {
      const token = localStorage.getItem("token"); // 🔐 Obtener token

      const response = await axios.post(urlBase, booking, {
        headers: {
          Authorization: `Bearer ${token}`, // ✅ Agregar token al header
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        setSuccess(response.data.message || "Solicitud enviada con éxito");
        setTimeout(() => {
          navegacion("/prestamos");
        }, 2000);
      } else {
        setError(response.data.message || "Error al crear booking");
      }
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Error en el registro, por favor intente más tarde");
      }
      console.error("Error detallado:", err);
    }

    console.log("Datos enviados:", booking);
  };

  if (!item) return <p className="text-center">Cargando...</p>;

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
                <LogoutButton />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="container d-flex justify-content-center align-items-center my-4">
        <div
          className="card p-4"
          style={{
            maxWidth: "500px",
            width: "100%",
            borderRadius: "1rem",
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h4 className="mb-4 fw-bold text-center">
            Formulario de Solicitud de Préstamo
          </h4>

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

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-bold">
                Nombre:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
                value={booking.name}
                onChange={handleChange}
                placeholder="Ingresa tu nombre"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">
                Correo Electrónico:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
                value={booking.email}
                onChange={handleChange}
                placeholder="nombre@correo.com"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="itemName" className="form-label fw-bold">
                Juego a Solicitar:
              </label>
              <input
                type="text"
                className="form-control"
                id="itemName"
                name="itemName"
                disabled
                value={item.itemName}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="startTime" className="form-label fw-bold">
                Fecha de Préstamo:
              </label>
              <input
                type="datetime-local"
                className="form-control"
                id="startTime"
                name="startTime"
                required
                value={booking.startTime}
                onChange={handleChange}
              />
            </div>

            <div className="d-grid">
              <button
                type="submit"
                className="btn fw-bold"
                style={{ backgroundColor: "#e67e22", color: "white" }}
              >
                Enviar Solicitud
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
