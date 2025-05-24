import { Link } from "react-router-dom";

export default function MisPrestamos() {
  return (
   <div>  
      {/* Contenido principal */}
      <div className="container mt-5">
        <h2 className="mb-4">Lista de Préstamos</h2>
        <div className="row">
          {/* Tarjeta 1 */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Catan</h5>
                <p className="card-text"><strong>Fecha de Préstamo:</strong> 12/03/2024</p>
                <p className="card-text"><strong>Fecha de Devolución:</strong> 19/03/2024</p>
              </div>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Monopoly</h5>
                <p className="card-text"><strong>Fecha de Préstamo:</strong> 15/03/2024</p>
                <p className="card-text"><strong>Fecha de Devolución:</strong> 22/03/2024</p>
              </div>
            </div>
          </div>

          {/* Agrega más tarjetas aquí si lo necesitas */}
        </div>
      </div>
    </div>
  );
}