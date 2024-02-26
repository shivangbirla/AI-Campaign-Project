import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Assuming App.tsx is correctly named and in the same directory
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// Ensure the element with id 'root' exists in your index.html file
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}
