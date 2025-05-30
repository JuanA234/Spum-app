import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Solicitudes() {
  const [visibleOptions, setVisibleOptions] = useState(null);
  const [solicitudes, setSolicitudes] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:8080/bookings/status/IN_PROCESS", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const data = response.data;

        const solicitudesMapeadas = data.map((item) => ({
          nombre: `${item.userName} ${item.userLastName}`,
          codigo: `#${item.bookingId}`,
          item: item.item,
          bookingId: item.bookingId, // importante para enviar la actualización
        }));

        setSolicitudes(solicitudesMapeadas);
      })
      .catch((error) => {
        console.error("Error al obtener solicitudes:", error);
        if (error.response?.status === 401) {
          alert("Sesión expirada. Inicia sesión nuevamente.");
          window.location.href = "/login";
        }
      });
  }, [token]);

  const toggleOptions = (index) => {
    setVisibleOptions(visibleOptions === index ? null : index);
  };

  const actualizarEstado = (bookingId, nuevoEstado) => {
    axios
      .patch(
        "http://localhost:8080/bookings/update-status",
        {
          bookingId: bookingId,
          status: nuevoEstado,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("Estado actualizado:", response.data);
        // Opcional: quitar la solicitud de la lista una vez procesada
        setSolicitudes((prev) =>
          prev.filter((sol) => sol.bookingId !== bookingId)
        );
      })
      .catch((error) => {
        console.error("Error al actualizar el estado:", error);
        alert("No se pudo actualizar el estado.");
      });
  };

  return (
    <div>
      <header className="bg-primary py-3">
        <div className="d-flex justify-content-between align-items-center container">
          <h1 className="text-white fw-bold">🎲SPUM</h1>
        </div>
      </header>

      <div className="container py-4">
        <h2 className="mb-4 text-center">Lista de solicitudes pendientes</h2>
        <div className="row g-4">
          {solicitudes.map((solicitud, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title text-primary">{solicitud.nombre}</h5>
                  <p className="card-text mb-1">
                    <strong>Código:</strong> {solicitud.codigo}
                  </p>
                  <p className="card-text mb-3">
                    <strong>Artículo:</strong> {solicitud.item}
                  </p>

                  {visibleOptions === index ? (
                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          actualizarEstado(solicitud.bookingId, "BOOKED")
                        }
                      >
                        Aprobar
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          actualizarEstado(solicitud.bookingId, "CANCELLED")
                        }
                      >
                        Rechazar
                      </button>
                    </div>
                  ) : (
                    <button
                      className="btn btn-outline-secondary w-100"
                      onClick={() => toggleOptions(index)}
                    >
                      Mostrar Opciones
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <Link
            to="/auxiliar"
            className="btn text-white"
            style={{ background: "#6610f2" }}
          >
            Regresar
          </Link>
        </div>
      </div>
    </div>
  );
}
