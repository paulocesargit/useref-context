import React, { useState, useRef } from "react";

const Cronometro = () => {
  const [segundos, setSegundos] = useState(0);
  const intervaloRef = useRef(null);

  const iniciar = () => {
    if (!intervaloRef.current) {
      intervaloRef.current = setInterval(() => {
        setSegundos((prev) => prev + 1);
      }, 1000);
    }
  };

  const pausar = () => {
    if (intervaloRef.current) {
      clearInterval(intervaloRef.current);
      intervaloRef.current = null;
    }
  };

  const resetar = () => {
    pausar();
    setSegundos(0);
  };

  return (
    <div>
      <h1>Cronômetro: {segundos} segundos</h1>
      <button onClick={iniciar}>Iniciar</button>
      <button onClick={pausar}>Pausar</button>
      <button onClick={resetar}>Resetar</button>
    </div>
  );
};

export default Cronometro;
