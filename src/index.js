import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { GlobalStyles } from "./Full";

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
