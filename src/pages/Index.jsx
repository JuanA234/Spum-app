import { Link } from "react-router-dom";

export default function Index() {
    return(
<div className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light px-3">
      <header className="mb-4 text-center">
        <h1 className="display-4 fw-bold text-primary">
          <span role="img" aria-label="Préstamo de Artículos">🎲</span>{" "}
          Préstamo de Artículos
        </h1>
      </header>

      <section className="bg-white p-5 rounded-4 shadow-lg w-100" style={{ maxWidth: "500px" }}>
        <h2 className="h4 mb-4 text-center text-dark">
          Bienvenido al sistema de préstamo de artículos de Bienestar
        </h2>

        <div className="d-grid gap-3">
          <Link
            to="/login"
            className="btn btn-primary btn-lg"
          >
            Iniciar Sesión
          </Link>
          <Link
            to="/registro"
            className="btn btn-outline-secondary btn-lg"
          >
            Registrarse
          </Link>
        </div>
      </section>
    </div>
    );
}