import React from "react";
import "./style.css"; // Importamos los estilos
import googleIcon from "./google-icon.svg";
import titulo from "./titulo.png";

export const InicioDeSesion = () => {
  return (
    <div className="inicio-de-sesion">
      <div className="div">
        <img className="titulo" alt="Titulo" src={titulo} />

        <button className="button">
          <div className="text-container">
            <button className="CTA">Registrarse</button>
          </div>
        </button>

        <div className="copy-component">
          <div className="heading-container">
            <div className="sign-up-heading">Iniciar sesión</div>

            <div className="subheading">Únete a la batalla!</div>
          </div>

          <div className="google-login">
            <img className="google-icon" alt="Google icon" src={googleIcon} />

            <div className="continue-with-google">Continuar con Google</div>
          </div>

          <div className="separator">
            <div className="line" />

            <div className="text-wrapper">or</div>

            <div className="line" />
          </div>

          <div className="form">
            <div className="input">
              <div className="input-form">
                <div className="placeholder-text-wrapper">
                  <div className="placeholder-text">Correo electrónico</div>
                </div>
              </div>
            </div>

            <div className="input-form">
              <div className="placeholder-text-wrapper">
                <div className="placeholder-text-2">Contraseña</div>
              </div>
            </div>

            <button className="text-container-wrapper">
              <div className="CTA-wrapper">
                <button className="CTA">Iniciar</button>
              </div>
            </button>
          </div>
        </div>

        <p className="by-continuing-you">
          Al continuar, aceptas nuestros Términos de Servicio y Política de Privacidad.
        </p>
      </div>
    </div>
  );
};

export default InicioDeSesion;
