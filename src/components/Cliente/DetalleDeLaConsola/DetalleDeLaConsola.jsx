import React, { useState } from "react";
import "./style.css"; // Importamos los estilos

// Imágenes de ejemplo para la consola
import rectangle19 from "./rectangle-19.png";
import rectangle16 from "./rectangle-16.png";
import rectangle17 from "./rectangle-17.png";
import polygon1 from "./polygon-1.svg";
import x26933361 from "./2693336-1.png";

const DetallesDeLaConsola = () => {
  const [date, setDate] = useState(""); // Para manejar la fecha de la reserva

  // Función para manejar el cambio de fecha
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="detalles-de-la">
      <div className="div">
        {/* Imagen de fondo */}
        <img className="rectangle" alt="Fondo de consola" src={rectangle19} />

        {/* Nombre de la consola */}
        <div className="text-wrapper">Xbox One</div>

        {/* Descripción del servicio */}
        <p className="cuenta-con-servicio">
          Cuenta con servicio de streaming además de 2 controles para jugar con
          acompañante.
        </p>

        {/* Precio */}
        <div className="text-wrapper-2">$2,000 la Hr</div>

        {/* Sugerencias */}
        <div className="text-wrapper-3">Sugerencias</div>

        {/* Botón de reserva */}
        <div className="overlap">
          <div className="rectangle-2" />
          <div className="text-wrapper-4">Reservar</div>
          <img className="element" alt="Imagen adicional" src={x26933361} />
        </div>

        {/* Imágenes relacionadas */}
        <div className="overlap-group">
          <div className="rectangle-3" />
          <img className="img" alt="Consola adicional 1" src={rectangle16} />
        </div>

        <div className="overlap-2">
          <div className="rectangle-4" />
          <img className="img" alt="Consola adicional 2" src={rectangle17} />
        </div>

        {/* Volver */}
        <div className="volver">
          <div className="overlap-group-2">
            <img className="polygon" alt="Polygon" src={polygon1} />
            <div className="rectangle-5" />
          </div>
        </div>

        {/* Campo para seleccionar la fecha */}
        <div className="input-form">
          <div className="text-container">
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              className="placeholder-text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetallesDeLaConsola;
