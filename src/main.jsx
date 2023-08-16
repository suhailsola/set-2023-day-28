import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  // Provider
  <React.StrictMode>
    {/* children */}
    <App />
  </React.StrictMode>
);
