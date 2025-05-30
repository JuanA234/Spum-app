import axios from "axios";
import { useEffect, useState } from "react";


export default function MisPrestamos() {
  const urlBase = "http://localhost:8080/bookings";
  const [prestamos, setPrestamos] = useState([]);

  useEffect(() => {
    cargarPrestamos();
  }, []);

  const cargarPrestamos = async () => {
    try {
      const token = localStorage.getItem("token");
      const email = localStorage.getItem("email");
      const response = await axios.get(`${urlBase}/student?email=${email}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Resultado de cargarPrestamos:", response.data);
      setPrestamos(response.data);
    } catch (error) {
      console.error("Error al cargar préstamos:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Lista de Préstamos</h2>
      <div className="row">
        {prestamos.map((prestamo, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{prestamo.item}</h5>
                <p className="card-text">
                  <strong>Usuario:</strong> {prestamo.userName}
                </p>
                <p className="card-text">
                  <strong>Fecha de Préstamo:</strong>{" "}
                  {new Date(prestamo.startTime).toLocaleString()}
                </p>
                <p className="card-text">
                  <strong>Fecha de Devolución:</strong>{" "}
                  {new Date(prestamo.endTime).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
