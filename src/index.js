import React from "react";
import ReactDOM from "react-dom";
import App from "./task3/App";
import "./task3/styles/index.css";
import "./task3/styles/normalize.css";
import { expandedFolders } from "./task3/utils/config";

ReactDOM.render(
  <React.StrictMode>
    <App expanded={expandedFolders} />
  </React.StrictMode>,
  document.getElementById("root")
);
