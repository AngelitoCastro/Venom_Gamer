import React from "react";
import "./ingresosegresos.css";

export const IngresosEgresos = () => {
  // Datos simulados (puedes reemplazarlos con datos reales o conectarlos a `localStorage` o una API)
  const ingresos = [
    { fecha: "27/11/2024", concepto: "Ingresos diarios", monto: "$53,000" },
    { fecha: "26/11/2024", concepto: "Ingresos semanales", monto: "$370,000" },
    {
      fecha: "25/11/2024",
      concepto: "Ingresos mensuales",
      monto: "$1,530,000",
    },
  ];

  const egresos = [
    { fecha: "26/11/2024", concepto: "Mantenimiento", monto: "$620,000" },
    { fecha: "25/11/2024", concepto: "Suscripciones", monto: "$52,000" },
  ];

  return (
    <div className="ingresos-egresos-container">
      <h1>Gestión de Ingresos y Egresos</h1>

      {/* Tabla de ingresos */}
      <div className="tabla-container">
        <h2>Ingresos</h2>
        <table className="tabla">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Concepto</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody>
            {ingresos.map((ingreso, index) => (
              <tr key={index}>
                <td>{ingreso.fecha}</td>
                <td>{ingreso.concepto}</td>
                <td>{ingreso.monto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tabla de egresos */}
      <div className="tabla-container">
        <h2>Egresos</h2>
        <table className="tabla">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Concepto</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody>
            {egresos.map((egreso, index) => (
              <tr key={index}>
                <td>{egreso.fecha}</td>
                <td>{egreso.concepto}</td>
                <td>{egreso.monto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
