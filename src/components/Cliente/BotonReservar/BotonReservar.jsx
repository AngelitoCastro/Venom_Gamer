import React, { useState } from "react";
import "./style.css"; // Importamos los estilos

// Importa las imágenes que necesitas para el botón
import rectangle23 from "./rectangle-23.png"; // Ejemplo de imagen
import x29075441 from "./2907544-1.png"; // Ejemplo de imagen
import line1 from "./line-1.svg"; // Ejemplo de imagen
import line2 from "./line-2.svg"; // Ejemplo de imagen

const BotonReservar = () => {
  const [date, setDate] = useState(""); // Para manejar la fecha de la reserva

  // Función para manejar el cambio de fecha
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="boton-reservar">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="element" alt="Icono" src={x29075441} />
          <div className="rectangle" />
          <img className="img" alt="Consola" src={rectangle23} />

          {/* Información del botón */}
          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper">Reservar</div>
            </div>
          </div>
          <div className="div">Xbox One</div>
          <div className="text-wrapper-2">$2,000</div>

          {/* Cerrar opción */}
          <div className="cerrar">
            <div className="overlap-2">
              <img className="line" alt="Line" src={line1} />
              <img className="line-2" alt="Line" src={line2} />
            </div>
          </div>

          {/* Campo de entrada para la fecha */}
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

          {/* Imagen del botón */}
          <img className="element-2" alt="Icono adicional" src={x29075441} />
        </div>
      </div>
    </div>
  );
};

export default BotonReservar;
