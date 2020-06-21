import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import ComponentD from "./ComponentD";

const ComponentA = () => {
  const [color, setColor] = useState("red");

  return (
    <ThemeContext.Provider value={color}>
      <input
        type="text"
        value={color}
        onChange={e => setColor(e.target.value)}
      />
      <ComponentD />
    </ThemeContext.Provider>
  );
};

export default ComponentA;
