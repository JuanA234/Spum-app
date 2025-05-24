import React, { useState } from "react";
import "./devolucion.css";

export default function Devolucion() {
  const [returnRecords, setReturnRecords] = useState([]);
  const [userCode, setUserCode] = useState("");
  const [item, setItem] = useState("");

  function registerReturn() {
    if (userCode.trim() === "" || item.trim() === "") {
      alert("Por favor, complete todos los campos.");
      return;
    }

    const record = {
      user: userCode.trim(),
      item: item.trim(),
      date: new Date().toLocaleString(),
    };

    setReturnRecords([...returnRecords, record]);
    setUserCode("");
    setItem("");
    alert("Devolución registrada exitosamente.");
  }

  function generateReport() {
    if (returnRecords.length === 0) {
      alert("No hay devoluciones registradas.");
      return;
    }

    let reportContent = "Generar Informe\n";
    returnRecords.forEach((record) => {
      reportContent += `Usuario: ${record.user}, Artículo: ${record.item}, Fecha: ${record.date}\n`;
    });

    const blob = new Blob([reportContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "reporte_devoluciones.txt";
    link.click();
  }

  return (
    <div>
      <header>
        <h1>Registrar Devolución</h1>
      </header>

      <div className="container">
        <div className="container-action">
          <h2>Devolver un Artículo</h2>
          <input
            type="text"
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            placeholder="Ingrese código universitario"
          />
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="Ingrese el artículo devuelto"
          />
          <button onClick={registerReturn}>Registrar Devolución</button>
        </div>

        <div className="container-action">
          <h2>Generar Informe</h2>
          <button onClick={generateReport}>Generar Informe</button>
          <ul>
            {returnRecords.map((record, index) => (
              <li key={index}>
                Usuario: {record.user}, Artículo: {record.item}, Fecha: {record.date}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}