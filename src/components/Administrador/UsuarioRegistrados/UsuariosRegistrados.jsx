import React, { useState, useEffect } from "react";
import "./usuariosRegistrados.css";

export const UsuariosRegistrados = () => {
  // Datos ficticios de los usuarios
  const [usuarios, setUsuarios] = useState([
    {
      id: 1,
      nombre: "Juan Pérez",
      correo: "juan@example.com",
      fechaRegistro: "2024-11-01",
    },
    {
      id: 2,
      nombre: "Ana García",
      correo: "ana@example.com",
      fechaRegistro: "2024-11-02",
    },
    {
      id: 3,
      nombre: "Luis Martínez",
      correo: "luis@example.com",
      fechaRegistro: "2024-11-03",
    },
  ]);

  const [busqueda, setBusqueda] = useState("");

  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
  };

  const eliminarUsuario = (id) => {
    setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
  };

  // Filtra los usuarios según la búsqueda
  const usuariosFiltrados = usuarios.filter(
    (usuario) =>
      usuario.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      usuario.correo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="usuarios-registrados-container">
      <h1>Usuarios Registrados</h1>

      <div className="busqueda">
        <input
          type="text"
          placeholder="Buscar usuario..."
          value={busqueda}
          onChange={handleBusquedaChange}
        />
      </div>

      <table className="tabla-usuarios">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Fecha de Registro</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuariosFiltrados.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nombre}</td>
              <td>{usuario.correo}</td>
              <td>{usuario.fechaRegistro}</td>
              <td>
                <button
                  className="btn-eliminar"
                  onClick={() => eliminarUsuario(usuario.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
