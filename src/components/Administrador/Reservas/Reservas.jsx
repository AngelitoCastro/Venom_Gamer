import React, { useState } from "react";
import "./reservas.css";

export const Reservas = () => {
  // Estado para las reservas (puedes reemplazarlo por datos reales o conectarlo a una base de datos)
  const [reservas, setReservas] = useState([
    {
      usuario: "Juan Pérez",
      fecha: "2024-11-20",
      tiempo: "2 horas",
      consola: "Xbox Series X",
    },
    {
      usuario: "Ana Gómez",
      fecha: "2024-11-21",
      tiempo: "1 hora",
      consola: "PlayStation 5",
    },
  ]);

  // Estado para nuevos datos de reserva
  const [newReserva, setNewReserva] = useState({
    usuario: "",
    fecha: "",
    tiempo: "",
    consola: "",
  });

  // Función para manejar cambios en el formulario
  const handleChange = (e) => {
    setNewReserva({
      ...newReserva,
      [e.target.name]: e.target.value,
    });
  };

  // Función para agregar una nueva reserva
  const handleAddReserva = (e) => {
    e.preventDefault();
    setReservas([...reservas, newReserva]);
    setNewReserva({
      usuario: "",
      fecha: "",
      tiempo: "",
      consola: "",
    });
  };

  return (
    <div className="reservas-container">
      <h1>Gestión de Reservas</h1>

      {/* Tabla de reservas */}
      <div className="tabla-container">
        <h2>Reservas Actuales</h2>
        <table className="tabla">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Fecha</th>
              <th>Tiempo</th>
              <th>Consola</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((reserva, index) => (
              <tr key={index}>
                <td>{reserva.usuario}</td>
                <td>{reserva.fecha}</td>
                <td>{reserva.tiempo}</td>
                <td>{reserva.consola}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Formulario para agregar nueva reserva */}
      <div className="form-container">
        <h2>Agregar Nueva Reserva</h2>
        <form onSubmit={handleAddReserva}>
          <label>
            Usuario:
            <input
              type="text"
              name="usuario"
              value={newReserva.usuario}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Fecha:
            <input
              type="date"
              name="fecha"
              value={newReserva.fecha}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Tiempo:
            <input
              type="text"
              name="tiempo"
              value={newReserva.tiempo}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Consola:
            <input
              type="text"
              name="consola"
              value={newReserva.consola}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="btn-agregar">
            Agregar Reserva
          </button>
        </form>
      </div>
    </div>
  );
};
