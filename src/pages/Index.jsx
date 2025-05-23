import { Link } from "react-router-dom";
import "../index.css";
import Footer from "../components/footer";

export default function Index() {
    return(
    <div>
      <header>
        <h1>
          <span role="img" aria-label="Préstamo de Artículos">🎲</span>{" "}
          Préstamo de Artículos
        </h1>
      </header>

      <section className="hero">
        <h2>Bienvenido al sistema de préstamo de Artículos de Bienestar</h2>
        <div className="btn-container">
          <Link to="/login" className="btn btn-primary">Iniciar Sesión</Link>
          <Link to="/registro" className="btn btn-secondary">Registrarse</Link>
        </div>
      </section>
      <Footer />
    </div>
    );
}