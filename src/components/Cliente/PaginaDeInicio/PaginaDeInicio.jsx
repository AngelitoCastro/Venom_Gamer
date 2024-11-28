import React from "react";
import consolaIcon from "./2949874-1.png"; // Icono decorativo para la página
import "./style.css";

const PaginaDeInicio = () => {
  return (
    <div className="pagina-de-inicio">
      <div className="content">
        <p className="titulo">
          Bienvenido a Venoom Gamer: ¡Tu paraíso de videojuegos!
        </p>

        <p className="descripcion">
          Sumérgete en la experiencia definitiva de los videojuegos. Reserva tu
          consola favorita, juega los últimos títulos y disfruta de un ambiente
          único hecho para los verdaderos gamers. ¡Únete a la comunidad y lleva
          tu juego al siguiente nivel con Venoom Gamer!
        </p>

        <div className="acciones">
          <button className="boton">
            <div className="text-container">
              Ver consolas disponibles
            </div>
          </button>

          <img
            className="icono-consola"
            alt="Icono de consola"
            src={consolaIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default PaginaDeInicio;
