import React from "react";
import ThemeContext from "./ThemeContext";
import ComponentD from "./ComponentD";

const ComponentA = () => (
  <ThemeContext.Provider value="red">
    <ComponentD />
  </ThemeContext.Provider>
);

export default ComponentA;
