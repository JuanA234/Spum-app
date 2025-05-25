import React from "react";
import monopolyImg from "../assets/Monopoly-Emblem.png";

export default function Inicio() {
  return (
    <div className="container text-center py-5">
      <main className="mb-5">
        <h2 className="mb-4">Descubre y solicita artículos fácilmente</h2>
        <img
          src={monopolyImg}
          alt="Monopoly"
          className="img-fluid rounded shadow mb-4"
          style={{ maxWidth: "400px", height: "auto" }}
        />
        <div>
          <a href="/juegos" className="btn btn-primary btn-lg">
            Explorar Juegos
          </a>
        </div>
      </main>
    </div>
  );
}
