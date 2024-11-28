import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminDashboard } from "./components/administrador/AdminDashboard";
import { UsuariosRegistrados } from "./components/administrador/UsuariosRegistrados";
import { Reservas } from "./components/administrador/Reservas";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/usuarios" element={<UsuariosRegistrados />} />
        <Route path="/admin/reservas" element={<Reservas />} />
        {/* Agrega más rutas según las secciones */}
      </Routes>
    </Router>
  );
};

export default App;
