import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";

import ObjectPage from "./ObjectPage";
import Reveil from "./Reveil";
const container = document.getElementById("root");
const root = createRoot(container); // Utilisation de createRoot

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/reveil" element={<Reveil />} />
      <Route path="/object/:id" element={<ObjectPage />} />
      <Route path="*" element={<h1>404 - Page non trouvée</h1>} />
    </Routes>
  </Router>
);
