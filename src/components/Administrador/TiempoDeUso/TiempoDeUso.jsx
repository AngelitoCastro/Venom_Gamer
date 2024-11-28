import React, { useState, useEffect } from "react";
import "./tiempoDeUso.css";

export const TiempoDeUso = () => {
  // Estados para controlar el tiempo de uso y los cronómetros de cada consola
  const [consola1Time, setConsola1Time] = useState(0);
  const [consola2Time, setConsola2Time] = useState(0);
  const [isRunningConsola1, setIsRunningConsola1] = useState(false);
  const [isRunningConsola2, setIsRunningConsola2] = useState(false);

  // Usamos useEffect para controlar el tiempo
  useEffect(() => {
    let interval1, interval2;

    if (isRunningConsola1) {
      interval1 = setInterval(() => {
        setConsola1Time((prevTime) => prevTime + 1);
      }, 1000); // Incrementa cada segundo
    } else if (!isRunningConsola1 && consola1Time !== 0) {
      clearInterval(interval1); // Detiene el cronómetro cuando no está corriendo
    }

    if (isRunningConsola2) {
      interval2 = setInterval(() => {
        setConsola2Time((prevTime) => prevTime + 1);
      }, 1000); // Incrementa cada segundo
    } else if (!isRunningConsola2 && consola2Time !== 0) {
      clearInterval(interval2); // Detiene el cronómetro cuando no está corriendo
    }

    return () => {
      clearInterval(interval1);
      clearInterval(interval2); // Limpia los intervalos al desmontar el componente
    };
  }, [isRunningConsola1, isRunningConsola2]);

  // Funciones para iniciar y detener los cronómetros
  const toggleTimerConsola1 = () => {
    setIsRunningConsola1(!isRunningConsola1);
  };

  const toggleTimerConsola2 = () => {
    setIsRunningConsola2(!isRunningConsola2);
  };

  // Funciones para resetear los tiempos
  const resetTimerConsola1 = () => {
    setConsola1Time(0);
  };

  const resetTimerConsola2 = () => {
    setConsola2Time(0);
  };

  // Formato de tiempo en horas, minutos y segundos
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="tiempo-uso-container">
      <h1>Tiempo de Uso de Consolas</h1>

      <div className="consola-container">
        <h2>Consola 1: Xbox Series X</h2>
        <div className="timer">
          <p>{formatTime(consola1Time)}</p>
        </div>
        <div className="controls">
          <button onClick={toggleTimerConsola1}>
            {isRunningConsola1 ? "Detener" : "Iniciar"}
          </button>
          <button onClick={resetTimerConsola1}>Resetear</button>
        </div>
      </div>

      <div className="consola-container">
        <h2>Consola 2: PlayStation 5</h2>
        <div className="timer">
          <p>{formatTime(consola2Time)}</p>
        </div>
        <div className="controls">
          <button onClick={toggleTimerConsola2}>
            {isRunningConsola2 ? "Detener" : "Iniciar"}
          </button>
          <button onClick={resetTimerConsola2}>Resetear</button>
        </div>
      </div>
    </div>
  );
};
