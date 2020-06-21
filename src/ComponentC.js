import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ComponentC = () => {
  const color = useContext(ThemeContext);
  return <p style={{ color }}>Hello World</p>;
};

export default ComponentC;
