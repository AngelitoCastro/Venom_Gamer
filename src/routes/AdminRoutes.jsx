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

      {/* Ruta por defecto para el admin: Si el usuario ya está autenticado o logueado */}
      <Route path="/" element={<AdminLogin />} />

      {/* Todas las rutas administrativas se agrupan bajo /admin */}
      <Route path="/admin/*" element={<AdminDashboard />}>
        {/* Aquí agregas todas las rutas que deberían estar dentro del panel de administrador */}
        <Route path="admin-dashboard" element={<AdminDashboard />} />
        <Route path="admin-reservas" element={<Reservas />} />
        <Route path="admin-ingresos-egresos" element={<IngresosEgresos />} />
        <Route
          path="admin-mantenimiento-suscripciones"
          element={<MantenimientoSuscripciones />}
        />
        <Route
          path="admin-usuarios-registrados"
          element={<UsuariosRegistrados />}
        />
        <Route path="admin-tiempo-de-uso" element={<TiempoDeUso />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
