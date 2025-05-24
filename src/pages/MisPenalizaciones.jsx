import { Link } from "react-router-dom";
import Footer from "../components/footer";

export default function Penalizaciones() {
  return (
    <div>

      <section className="penalizaciones">
        <h2>Lista de Penalizaciones</h2>
        <div className="penalizaciones-container">
          <div className="penalizacion-card">
            <p><strong>Fecha: </strong>17/03/2025</p>
            <p><strong>Motivo: </strong>Entrega tardía de elemento</p>
          </div>
        </div>
      </section>
    </div>
  );
}