import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Intro from "./Intro";
import ObjectPage from "./ObjectPage";
import Reveil from "./Reveil";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Intro />} />{" "}
      {/* 👈 intro devient la page d'accueil */}
      <Route path="/chambre" element={<App />} />{" "}
      {/* 👈 ancien accueil déplacé ici */}
      <Route path="/reveil" element={<Reveil />} />
      <Route path="/object/:id" element={<ObjectPage />} />
      <Route path="*" element={<h1>404 - Page non trouvée</h1>} />
    </Routes>
  </Router>
);
