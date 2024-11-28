import React from "react";
import ReactDOM from "react-dom/client"; // Nueva API de React 18 para crear el root
import { BrowserRouter } from "react-router-dom"; // Necesario para la navegación
import App from "./App"; // Componente principal
import "./index.css"; // Estilos globales (opcional)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
