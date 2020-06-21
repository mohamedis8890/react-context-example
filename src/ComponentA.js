import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import ComponentD from "./ComponentD";

const ComponentA = () => {
  const [color, setColor] = useState("red");

  return (
    <>
      <input
        type="text"
        value={color}
        onChange={e => setColor(e.target.value)}
      />
      <ThemeContext.Provider value={color}>
        <ComponentD />
      </ThemeContext.Provider>
    </>
  );
};

export default ComponentA;
