import React from "react";
import FocoInput from "./components/focoinput.jsx";
import Cronometro from "./components/cronometro.jsx";
import Tema from "./components/tema.jsx";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Exercícios com React</h1>
      <h2>Exercício 1 - Foco</h2>
      <FocoInput />

      <h2>Exercício 2 - Cronômetro</h2>
      <Cronometro />

      <h2>Exercício 3 - Tema Claro/Escuro</h2>
      <Tema />
    </div>
  );
};

export default App;
