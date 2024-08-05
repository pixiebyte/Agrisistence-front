import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // Your custom CSS
import Acceuil from "./pages/Acceuil";

ReactDOM.render(
  <React.StrictMode>
    <Acceuil />
  </React.StrictMode>,
  document.getElementById("root")
);
