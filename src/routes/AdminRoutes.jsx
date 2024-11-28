import React from "react";
import { Route, Routes } from "react-router-dom"; // Importamos 'Routes' y 'Route' para las rutas
import AdminDashboard from "./AdminDashboard"; // Dashboard del administrador
import IngresosEgresos from "./IngresosEgresos"; // Página para gestionar ingresos y egresos
import MantenimientoSuscripciones from "./MantenimientoSuscripciones"; // Página para mantenimiento de suscripciones
import UsuariosRegistrados from "./UsuariosRegistrados"; // Página para ver usuarios registrados
import Reservas from "./Reservas"; // Página para gestionar reservas
import TiempoDeUso from "./TiempoDeUso"; // Página para gestionar tiempo de uso
import AdminLogin from "./AdminLogin"; // Página para iniciar sesión como administrador

const AdminRoutes = () => {
  return (
    <Routes>
      {/* Ruta para el login del administrador */}
      <Route path="/admin-login" element={<AdminLogin />} />

      {/* Ruta para el dashboard del administrador */}
      <Route path="/admin-dashboard" element={<AdminDashboard />} />

      {/* Rutas para gestionar reservas */}
      <Route path="/admin-reservas" element={<Reservas />} />

      {/* Rutas para gestionar ingresos/egresos */}
      <Route path="/admin-ingresos-egresos" element={<IngresosEgresos />} />

      {/* Rutas para gestionar mantenimiento y suscripciones */}
      <Route
        path="/admin-mantenimiento-suscripciones"
        element={<MantenimientoSuscripciones />}
      />

      {/* Ruta para ver usuarios registrados */}
      <Route
        path="/admin-usuarios-registrados"
        element={<UsuariosRegistrados />}
      />

      {/* Ruta para gestionar tiempo de uso */}
      <Route path="/admin-tiempo-de-uso" element={<TiempoDeUso />} />

      {/* Ruta por defecto (admin login si no hay sesión) */}
      <Route path="/" element={<AdminLogin />} />
    </Routes>
  );
};

export default AdminRoutes;
