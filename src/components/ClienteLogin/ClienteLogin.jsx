import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para redirigir al dashboard del cliente después de login

const ClienteLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Función para manejar el login
  const handleLogin = () => {
    // Simulamos una autenticación básica
    // Esto debe ser reemplazado con un sistema de autenticación real
    if (email === "cliente@ejemplo.com" && password === "1234") {
      // Si las credenciales son correctas, guardamos la sesión
      localStorage.setItem("isAuthenticated", "true");
      navigate("/cliente-dashboard"); // Redirigimos al dashboard del cliente
    } else {
      // Si las credenciales son incorrectas, mostramos un mensaje
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div>
      <h2>Login Cliente</h2>
      <div>
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Actualizamos el estado del email
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Actualizamos el estado de la contraseña
        />
      </div>
      <div>
        <button onClick={handleLogin}>Iniciar sesión</button>
      </div>
    </div>
  );
};

export default ClienteLogin;
