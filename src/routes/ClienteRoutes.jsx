import React from "react";
import { Route, Routes } from "react-router-dom";
import ClienteLogin from "../components/ClienteLogin/ClienteLogin"; // Asegúrate de importar el componente correctamente
import ClientePage from "../components/ClientePage"; // Página principal del cliente
import ConsolasDisponibles from "../components/ConsolasDisponibles"; // Página para ver consolas disponibles
import Reservas from "../components/Reservas"; // Página para ver reservas
import Perfil from "../components/Perfil"; // Página para gestionar el perfil del cliente

const ClienteRoutes = () => {
  return (
    <Routes>
      <Route path="/cliente-login" element={<ClienteLogin />} />{" "}
      {/* Ruta para el login del cliente */}
      <Route path="/cliente-dashboard" element={<ClientePage />} />{" "}
      {/* Página principal del cliente */}
      <Route path="/cliente-consolas" element={<ConsolasDisponibles />} />{" "}
      {/* Página para ver consolas */}
      <Route path="/cliente-reservas" element={<Reservas />} />{" "}
      {/* Página para ver reservas */}
      <Route path="/cliente-perfil" element={<Perfil />} />{" "}
      {/* Página para gestionar perfil */}
      <Route path="/" element={<ClienteLogin />} />{" "}
      {/* Ruta por defecto que redirige a login */}
    </Routes>
  );
};

export default ClienteRoutes;
