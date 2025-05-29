import { Link } from "react-router-dom";
import Footer from "../components/footer";
import LogoutButton from "../components/LogoutButton";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Juegos() {
  const urlBase = "http://localhost:8080/items";
  const urlItemType = "http://localhost:8080/categories";

  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [types, setTypes] = useState([]);

  useEffect(() => {
    cargarItems();
  }, []);

  useEffect(() => {
    cargarTipos();
  }, []);

  const cargarTipos = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(urlItemType, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Resultado de cargarItems:", response.data);
      setTypes(response.data);
    } catch (error) {
      console.error("Error al cargar items:", error);
    }
  };

  const cargarItems = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(urlBase, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Resultado de tipos:", response.data);
      setItems(response.data);
    } catch (error) {
      console.error("Error al cargar los tipos:", error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) {
      cargarItems();
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${urlBase}/search`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { name: searchTerm },
      });
      const resultados = Array.isArray(response.data)
        ? response.data
        : [response.data];
      setItems(resultados);
    } catch (error) {
      console.error("Error al buscar el item:", error);
      setItems([]);
    }
  };

  const handleFilter = async (typeId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${urlBase}/type/${typeId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setItems(response.data);
    } catch (error) {
      console.error("Error al filtrar por tipo:", error);
      setItems([]);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand">🎲 Préstamo de Artículos</span>
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
              <form className="d-flex" role="search" onSubmit={handleSearch}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Buscar juegos..."
                  aria-label="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-success" type="submit">
                  Buscar
                </button>
              </form>
              <li className="nav-item">
                <LogoutButton />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="container">
        <h2 className="text-center">Lista de Artículos</h2>
        <div className="dropdown d-inline">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle btn-sm me-2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Seleccionar item
          </button>
          <ul className="dropdown-menu">
            <li key="all">
              <button className="dropdown-item" onClick={cargarItems}>
                Todos
              </button>
            </li>
            {types.map((type) => (
              <li key={type.itemTypeId}>
                <button
                  className="dropdown-item"
                  onClick={() => handleFilter(type.itemTypeId)}
                >
                  {type.itemTypeName}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="container mt-5">
          <div className="mb-4">
            <div className="row">
              {items.map((item, index) => (
                <div key={index} className="col-md-6 col-lg-4 mb-4">
                  <div className="card h-100">
                    <div style={{ height: "200px", overflow: "hidden" }}>
                      <img // Puedes cambiar esto por item.imageUrl si llega del backend
                        alt={item.itemName}
                        className="card-img-top"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">{item.itemName}</h3>
                      <p className="card-text">{item.itemDescription}</p>
                      <Link
                        to={`/detalle/${item.itemId}`}
                        className="btn btn-primary"
                      >
                        Ver Detalles
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
