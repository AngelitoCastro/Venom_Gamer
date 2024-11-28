import React, { useState } from "react";
import { ConsolasDisponibles } from "./ConsolasDisponibles"; // Componente para ver consolas disponibles
import { Reservas } from "./Reservas"; // Componente para hacer reservas
import { Perfil } from "./Perfil"; // Componente para gestionar el perfil del cliente
import { PaginaDeInicio } from "./PaginaDeInicio"; // Página principal para clientes
import { NavBar } from "./NavBar"; // Barra de navegación lateral
import "./clientePage.css"; // Estilos para ClientePage

export const ClientePage = () => {
  // Estado para manejar la sección activa
  const [seccion, setSeccion] = useState("inicio");

  // Función para cambiar la sección activa
  const cambiarSeccion = (seccion) => {
    setSeccion(seccion);
  };

  // Renderiza la sección activa
  const renderSeccion = () => {
    switch (seccion) {
      case "inicio":
        return <PaginaDeInicio />;
      case "consolas":
        return <ConsolasDisponibles />;
      case "reservas":
        return <Reservas />;
      case "perfil":
        return <Perfil />;
      default:
        return <PaginaDeInicio />;
    }
  };

  return (
    <div className="cliente-page">
      {/* Barra de navegación lateral */}
      <NavBar cambiarSeccion={cambiarSeccion} />

      {/* Contenido principal */}
      <div className="cliente-page-content">{renderSeccion()}</div>
    </div>
  );
};
