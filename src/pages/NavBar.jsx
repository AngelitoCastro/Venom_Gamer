import React from "react";
import "./navbar.css";

export const NavBar = ({ cambiarSeccion }) => {
  return (
    <div className="navbar">
      <h2 className="navbar-title">Panel de Administración</h2>
      <ul className="navbar-list">
        <li onClick={() => cambiarSeccion("dashboard")}>Dashboard</li>
        <li onClick={() => cambiarSeccion("usuarios")}>Usuarios Registrados</li>
        <li onClick={() => cambiarSeccion("ingresos")}>Ingresos y Egresos</li>
        <li onClick={() => cambiarSeccion("mantenimiento")}>
          Mantenimiento y Suscripciones
        </li>
        <li onClick={() => cambiarSeccion("reservas")}>Reservas</li>
        <li onClick={() => cambiarSeccion("tiempo")}>Tiempo de Uso</li>
      </ul>
    </div>
  );
};
