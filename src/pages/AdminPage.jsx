import React, { useState } from "react";
import { AdminDashboard } from "./AdminDashboard"; // Componente para el dashboard del admin
import { UsuariosRegistrados } from "./UsuariosRegistrados"; // Componente de usuarios registrados
import { IngresosEGresos } from "./IngresosEGresos"; // Componente de ingresos y egresos
import { MantenimientoSuscripciones } from "./MantenimientoSuscripciones"; // Componente de mantenimiento y suscripciones
import { Reservas } from "./Reservas"; // Componente de reservas
import { TiempoDeUso } from "./TiempoDeUso"; // Componente de tiempo de uso
import { NavBar } from "./NavBar"; // Componente para la barra de navegación lateral
import "./adminPage.css"; // Estilos para AdminPage

export const AdminPage = () => {
  // Estado para manejar la sección activa
  const [seccion, setSeccion] = useState("dashboard");

  // Función para cambiar la sección activa
  const cambiarSeccion = (seccion) => {
    setSeccion(seccion);
  };

  // Renderiza la sección activa
  const renderSeccion = () => {
    switch (seccion) {
      case "dashboard":
        return <AdminDashboard />;
      case "usuarios":
        return <UsuariosRegistrados />;
      case "ingresos":
        return <IngresosEGresos />;
      case "mantenimiento":
        return <MantenimientoSuscripciones />;
      case "reservas":
        return <Reservas />;
      case "tiempo":
        return <TiempoDeUso />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <div className="admin-page">
      {/* Barra de navegación */}
      <NavBar cambiarSeccion={cambiarSeccion} />

      {/* Contenido principal */}
      <div className="admin-page-content">{renderSeccion()}</div>
    </div>
  );
};
