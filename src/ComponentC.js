import React from "react";
import ThemeContext from "./ThemeContext";

const ComponentC = () => (
  <ThemeContext.Consumer>
    {color => <p style={{ color }}>Hello World</p>}
  </ThemeContext.Consumer>
);

export default ComponentC;
