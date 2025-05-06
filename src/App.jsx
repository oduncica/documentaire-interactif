import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SceneManager from "./components/SceneManager";
import LanguesDrapeau from "./components/LanguesDrapeau"; // adapte le chemin si besoin
import {
  FaBars,
  FaTimes,
  FaHome,
  FaFilm,
  FaBook,
  FaInfoCircle,
} from "react-icons/fa";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState("1980");

  const handleObjectClick = (obj) => {
    navigate(`/object/${obj.id}`);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  return (
    <div className="app">
      {/* Header */}

      <div className="header">
        <div className="hamburger-menu" onClick={toggleSidebar}>
          <FaBars className="icon" size={30} color="#414B6F" />
          <div>MENU</div>
        </div>

        <div className="year-buttons">
          {["1980", "2010", "2025"].map((year) => (
            <button
              key={year}
              className={selectedYear === year ? "active" : ""}
              onClick={() => handleYearChange(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
      <LanguesDrapeau />

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <button className="close-btn" onClick={toggleSidebar}>
            <FaTimes size={30} color="#fff" />
          </button>
        </div>
        <ul className="sidebar-menu">
          <li>
            <FaHome size={20} /> <span>The Room</span>
          </li>
          <li>
            <FaFilm size={20} /> <span>Complete Documentary</span>
          </li>
          <li onClick={() => navigate("/reveil")}>
            <FaBook size={20} /> <span>Bibliographie</span>
          </li>
          <li>
            <FaInfoCircle size={20} /> <span>Scènes Complémentaires</span>
          </li>
          <li>
            <FaInfoCircle size={20} /> <span>Crédit</span>
          </li>
        </ul>
      </div>

      {/* Interactive Room */}
      <div className="interactive-room">
        <SceneManager year={selectedYear} onObjectClick={handleObjectClick} />
      </div>
    </div>
  );
}

export default App;
