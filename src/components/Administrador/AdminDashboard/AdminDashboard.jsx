import React from "react";

const AdminDashboard = () => {
  return (
    <div>
      <h1>Dashboard del Administrador</h1>
      <p>Bienvenido al panel de administración de Venom Gamer.</p>
      <nav>
        <ul>
          <li>
            <a href="/admin/usuarios">Usuarios Registrados</a>
          </li>
          <li>
            <a href="/admin/reservas">Reservas</a>
          </li>
          {/* Agrega enlaces adicionales para otras secciones */}
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;
