import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes"; // Ruta de las páginas de administrador
import ClienteRoutes from "./routes/ClienteRoutes"; // Ruta de las páginas de cliente

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas para el administrador */}
        <Route path="/admin/*" element={<AdminRoutes />} />

        {/* Rutas para el cliente */}
        <Route path="/cliente/*" element={<ClienteRoutes />} />

        {/* Ruta por defecto, que redirige a la parte del cliente si no se especifica */}
        <Route path="/" element={<ClienteRoutes />} />
      </Routes>
    </Router>
  );
};

export default App;
