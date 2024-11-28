import React from "react";
import { Route, Routes } from "react-router-dom"; // Importamos 'Routes' y 'Route'
import ClientePage from "./ClientePage"; // Página principal del cliente
import ConsolasDisponibles from "./ConsolasDisponibles"; // Página para ver consolas disponibles
import Reservas from "./Reservas"; // Página para ver reservas
import Perfil from "./Perfil"; // Página para gestionar el perfil del cliente
import ClienteLogin from "./ClienteLogin"; // Página para iniciar sesión como cliente

const ClienteRoutes = () => {
  return (
    <Routes>
      {/* Ruta para el login del cliente */}
      <Route path="/cliente-login" element={<ClienteLogin />} />

      {/* Ruta para la página principal del cliente */}
      <Route path="/cliente-dashboard" element={<ClientePage />} />

      {/* Ruta para ver consolas disponibles */}
      <Route path="/cliente-consolas" element={<ConsolasDisponibles />} />

      {/* Ruta para ver y gestionar reservas */}
      <Route path="/cliente-reservas" element={<Reservas />} />

      {/* Ruta para gestionar el perfil */}
      <Route path="/cliente-perfil" element={<Perfil />} />

      {/* Ruta por defecto (cliente login si no hay sesión) */}
      <Route path="/" element={<ClienteLogin />} />
    </Routes>
  );
};

export default ClienteRoutes;
