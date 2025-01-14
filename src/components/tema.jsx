import React, { createContext, useContext, useState } from "react";
import "./tema.css";

const TemaContext = createContext();

const ProvedorTema = ({ children }) => {
  const [tema, setTema] = useState("claro");

  const alternarTema = () => {
    setTema((prev) => (prev === "claro" ? "escuro" : "claro"));
  };

  React.useEffect(() => {
    document.body.className = tema;
  }, [tema]);

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
};

const ExibirTema = () => {
  const { tema } = useContext(TemaContext);
  return <h1>Tema atual: {tema === "claro" ? "Claro" : "Escuro"}</h1>;
};

const AlternarTema = () => {
  const { alternarTema } = useContext(TemaContext);
  return <button onClick={alternarTema}>Alternar Tema</button>;
};

const Tema = () => {
  return (
    <ProvedorTema>
      <ExibirTema />
      <AlternarTema />
    </ProvedorTema>
  );
};

export default Tema;
