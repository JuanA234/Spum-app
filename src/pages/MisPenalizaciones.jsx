import { Link } from "react-router-dom";
import Footer from "../components/footer";

export default function Penalizaciones() {
  return (
    <div>
      <section className="container mt-5">
        <h2 className="mb-4">Lista de Penalizaciones</h2>
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <p className="card-text">
                  <strong>Fecha: </strong>17/03/2025
                </p>
                <p className="card-text">
                  <strong>Motivo: </strong>Entrega tardía de elemento
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
