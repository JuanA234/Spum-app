import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div>
        <p>&copy; 2025 Universidad del Magdalena - Préstamo de Artículos</p>
        <p>
          <Link to="/politica-privacidad">Política de Privacidad</Link> |{" "}
          <Link to="/terminos-uso">Términos de Uso</Link>
        </p>
        </div>
    );
}