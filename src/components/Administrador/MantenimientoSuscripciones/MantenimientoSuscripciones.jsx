import React from "react";
import "./mantenimientosuscripciones.css";

export const MantenimientoSuscripciones = () => {
  // Datos simulados (puedes reemplazarlos con datos reales o conectarlos a `localStorage` o una API)
  const mantenimientos = [
    {
      fecha: "13/11/2024",
      concepto: "Mantenimiento de consolas",
      total: "$620,000",
    },
    {
      fecha: "05/11/2024",
      concepto: "Mantenimiento de servidores",
      total: "$500,000",
    },
  ];

  const suscripciones = [
    { fecha: "01/11/2024", concepto: "Suscripción mensual", total: "$52,000" },
    { fecha: "01/10/2024", concepto: "Suscripción anual", total: "$500,000" },
  ];

  return (
    <div className="mantenimiento-suscripciones-container">
      <h1>Gestión de Mantenimiento y Suscripciones</h1>

      {/* Tabla de mantenimiento */}
      <div className="tabla-container">
        <h2>Mantenimiento</h2>
        <table className="tabla">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Concepto</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {mantenimientos.map((mantenimiento, index) => (
              <tr key={index}>
                <td>{mantenimiento.fecha}</td>
                <td>{mantenimiento.concepto}</td>
                <td>{mantenimiento.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tabla de suscripciones */}
      <div className="tabla-container">
        <h2>Suscripciones</h2>
        <table className="tabla">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Concepto</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {suscripciones.map((suscripcion, index) => (
              <tr key={index}>
                <td>{suscripcion.fecha}</td>
                <td>{suscripcion.concepto}</td>
                <td>{suscripcion.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
