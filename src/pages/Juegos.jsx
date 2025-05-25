import { Link } from "react-router-dom";
import Footer from "../components/footer";

export default function Juegos() {
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
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Buscar juegos..."
                  aria-label="Search"
                />
                <button class="btn btn-success" type="submit">
                  Buscar
                </button>
              </form>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Cerrar Sesión
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="container">
        <h2 className="text-center">Lista de Artículos</h2>
        <div className="container mt-5">
          <div className="mb-4">
            <div className="row">

              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100">
                  <div style={{ height: "200px", overflow: "hidden" }}>
                    <img
                      src="/src/assets/ajedrez.png"
                      alt="Ajedrez - Juego de estrategia para 2 jugadores"
                      className="card-img-top"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // o 'contain' si prefieres que no recorte
                      }}
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Ajedrez</h3>
                    <p className="card-text">Estrategia para 2 jugadores.</p>
                    <Link to="/solicitud" className="btn btn-primary">
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100">
                  <div style={{ height: "200px", overflow: "hidden" }}>
                    <img
                      src="/src/assets/Catan.png"
                      alt="Catan - Juego de estrategia y comercio"
                      className="card-img-top"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Catan</h3>
                    <p className="card-text">Estrategia y comercio.</p>
                    <Link to="/solicitud" className="btn btn-primary">
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100">
                  <div style={{ height: "200px", overflow: "hidden" }}>
                    <img
                      src="/src/assets/Monopoly-Emblem.png"
                      alt="Monopoly - Clásico juego de estrategia"
                      className="card-img-top"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <div className="card-body">
                    <h3 className="card-title">Monopoly</h3>
                    <p className="card-text">Clásico juego de estrategia.</p>
                    <Link to="/solicitud" className="btn btn-primary">
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
