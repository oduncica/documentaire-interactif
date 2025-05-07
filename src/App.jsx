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
  const [showVideo, setShowVideo] = useState(false); // État pour afficher la vidéo

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
      {/* Si la vidéo est affichée */}
      {showVideo ? (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "black",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <iframe
            src="https://player.vimeo.com/video/1081789878?h=b390d023c4&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="Documentaire complet"
          ></iframe>
          <button
            onClick={() => setShowVideo(false)} // Fermer la vidéo
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              zIndex: 1001,
            }}
          >
            Fermer
          </button>
        </div>
      ) : (
        <>
          {/* Header */}
          <div className="header">
            <div className="hamburger-menu" onClick={toggleSidebar}>
              <FaBars className="icon" size={30} color="#414B6F" />
              <div>MENU</div>
            </div>

            <div className="year-buttons">
              {["1980", "2000", "2025"].map((year) => (
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
              <li onClick={() => navigate("/chambre")}>
                <FaHome size={20} /> <span>The Room</span>
              </li>
              <li onClick={() => setShowVideo(true)}>
                {" "}
                {/* Afficher la vidéo */}
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
            <SceneManager
              year={selectedYear}
              onObjectClick={handleObjectClick}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
