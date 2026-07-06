import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "leaflet/dist/leaflet.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Registrar el Service Worker (PWA)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      await navigator.serviceWorker.register("/sw.js");
      console.log("✅ Service Worker registrado");
    } catch (err) {
      console.error("❌ Error registrando Service Worker:", err);
    }
  });
}
