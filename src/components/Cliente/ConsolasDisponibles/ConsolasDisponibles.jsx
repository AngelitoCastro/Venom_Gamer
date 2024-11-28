import React from "react";
import "./style.css"; // Importamos los estilos

// Imágenes de ejemplo para las consolas
import rectangle12 from "./rectangle-12.png";
import rectangle16 from "./rectangle-16.png";
import rectangle13 from "./rectangle-13.png";
import rectangle14 from "./rectangle-14.png";
import rectangle15 from "./rectangle-15.png";
import rectangle17 from "./rectangle-17.png";

const ConsolasDisponibles = () => {
  const consolas = [
    { id: 1, nombre: "PlayStation 5", precio: "$2,500", imagen: rectangle12 },
    { id: 2, nombre: "Xbox Series X", precio: "$2,000", imagen: rectangle16 },
    { id: 3, nombre: "Nintendo Switch", precio: "$1,800", imagen: rectangle13 },
    { id: 4, nombre: "PlayStation 4", precio: "$1,200", imagen: rectangle14 },
    { id: 5, nombre: "Xbox One", precio: "$1,000", imagen: rectangle15 },
    { id: 6, nombre: "PC Gaming", precio: "$3,000", imagen: rectangle17 },
  ];

  return (
    <div className="consolas-disponibles">
      <div className="div">
        <h2 className="titulo">Consolas Disponibles</h2>
        <div className="consolas-lista">
          {consolas.map((consola) => (
            <div key={consola.id} className="consola-item">
              <img src={consola.imagen} alt={consola.nombre} className="consola-imagen" />
              <div className="consola-info">
                <h3 className="consola-nombre">{consola.nombre}</h3>
                <p className="consola-precio">{consola.precio}</p>
                <button className="reservar-boton">Reservar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsolasDisponibles;

