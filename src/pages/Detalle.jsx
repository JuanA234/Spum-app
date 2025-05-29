import { Link, useParams } from "react-router-dom";
import Footer from "../components/footer";
import LogoutButton from "../components/LogoutButton";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Detalle() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

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

  if (!item) return <p className="text-center">Cargando...</p>;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand">🎲 Detalles del Artículos</span>
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
                <LogoutButton />
              </li>
            </ul>
          </div>
        </div>
      </nav>
        <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="row g-0">
                <div className="col-md-5 d-flex align-items-center justify-content-center bg-light">
                  <img
                    src={`https://via.placeholder.com/400x400?text=${item.itemName}`} // Reemplazar por imagen real si hay
                    alt={item.itemName}
                    className="img-fluid p-3"
                    style={{ maxHeight: "300px" }}
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <h4 className="card-title">{item.itemName}</h4>
                    <p className="card-text">{item.itemDescription}</p>
                    <p className="card-text">
                      <strong>Cantidad disponible: </strong>{item.itemQuantity}
                    </p>
                    <p className="card-text">
                      <strong>Tipo: </strong>{item.itemType?.itemTypeName}
                    </p>
                    <Link to="/solicitud" className="btn btn-outline-primary mt-3">
                      Solicitar Préstamo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <Link to="/juegos" className="btn btn-secondary">
                ⬅ Volver a Juegos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
