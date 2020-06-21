import React from "react";
import ReactDOM from "react-dom";
import ComponentA from "./ComponentA";

import "./styles.css";

const App = () => {
  return <ComponentA />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
