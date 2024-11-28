import React from "react";
import googleIcon from "./google-icon.svg"; // Ícono para iniciar sesión con Google
import titulo from "./titulo.png"; // Imagen del título
import "./style.css"; // Estilos del componente

const Registro = () => {
  return (
    <div className="registro">
      <div className="content">
        <img className="titulo" alt="Título" src={titulo} />

        <div className="form-container">
          <div className="heading">
            <h1 className="titulo-principal">Regístrate</h1>
            <p className="subtitulo">Únete a la batalla y forma parte de la comunidad Venoom Gamer</p>
          </div>

          <div className="google-login">
            <img className="google-icon" alt="Google icon" src={googleIcon} />
            <div className="google-text">Registrarse con Google</div>
          </div>

          <div className="separator">
            <div className="line" />
            <div className="text">o</div>
            <div className="line" />
          </div>

          <form className="form">
            <div className="form-group">
              <input
                type="email"
                placeholder="Correo electrónico"
                className="input"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Contraseña"
                className="input"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirmar contraseña"
                className="input"
              />
            </div>
            <button type="submit" className="boton">Registrar</button>
          </form>
        </div>

        <p className="terminos">
          Al registrarte, aceptas nuestros <span>Términos de Servicio</span> y nuestra <span>Política de Privacidad</span>.
        </p>
      </div>
    </div>
  );
};

export default Registro;
