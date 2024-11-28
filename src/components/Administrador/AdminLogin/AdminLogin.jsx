import React, { useState } from "react";
import "./adminlogin.css";

export const AdminLogin = () => {
  // Estados para manejar el correo y la contraseña
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación simple para demostrar
    if (email === "admin@venomgamer.com" && password === "admin123") {
      alert("Inicio de sesión exitoso");
      // Redireccionar al panel de administrador
      window.location.href = "/dashboard"; // Cambia según tu ruta
    } else {
      alert("Credenciales inválidas, intente de nuevo.");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h1>Venom Gamer</h1>
        <h2>Administrador</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese su correo"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese su contraseña"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};
