import React, { useRef } from "react";

const FocoInput = () => {
  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Digite algo..." />
    </div>
  );
};

export default FocoInput;
