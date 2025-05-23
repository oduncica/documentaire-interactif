import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SceneManager from "./components/SceneManager";
import LanguesDrapeau from "./components/LanguesDrapeau";
import HamburgerMenu from "./components/HamburgerMenu";
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
  const [langue, setLangue] = useState("fr"); // Ajout de la langue

  const handleObjectClick = (obj) => {
    navigate(`/object/${obj.id}`);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  // Traductions pour les boutons année et sidebar
  const yearLabels = {
    fr: { 1980: "Passé", 2025: "Présent" },
    kr: { 1980: "과거", 2025: "현재" },
  };

  const sidebarTexts = {
    fr: {
      room: "The Room",
      doc: "Complete Documentary",
      biblio: "Bibliographie",
      scenes: "Scènes Complémentaires",
      credit: "Crédit",
      close: "Fermer",
    },
    kr: {
      room: "방",
      doc: "전체 다큐멘터리",
      biblio: "참고문헌",
      scenes: "추가 장면",
      credit: "크레딧",
      close: "닫기",
    },
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
            onClick={() => setShowVideo(false)}
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
            {sidebarTexts[langue].close}
          </button>
        </div>
      ) : (
        <>
          {/* Header */}
          <div className="header">
            <HamburgerMenu onClick={toggleSidebar} langue={langue} />
            <div className="year-buttons">
              {["1980", "2025"].map((year) => (
                <button
                  key={year}
                  className={selectedYear === year ? "active" : ""}
                  onClick={() => handleYearChange(year)}
                >
                  {yearLabels[langue][year]}
                </button>
              ))}
            </div>
          </div>
          <LanguesDrapeau selectedLang={langue} setSelectedLang={setLangue} />
          {/* Sidebar */}
          <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
            <div className="sidebar-header">
              <button className="close-btn" onClick={toggleSidebar}>
                <FaTimes size={30} color="#fff" />
                <span style={{ marginLeft: 8 }}>
                  {sidebarTexts[langue].close}
                </span>
              </button>
            </div>
            <ul className="sidebar-menu">
              <li onClick={() => navigate("/chambre")}>
                <FaHome size={20} /> <span>{sidebarTexts[langue].room}</span>
              </li>
              <li onClick={() => setShowVideo(true)}>
                <FaFilm size={20} /> <span>{sidebarTexts[langue].doc}</span>
              </li>
              <li onClick={() => navigate("/reveil")}>
                <FaBook size={20} /> <span>{sidebarTexts[langue].biblio}</span>
              </li>
              <li>
                <FaInfoCircle size={20} />{" "}
                <span>{sidebarTexts[langue].scenes}</span>
              </li>
              <li>
                <FaInfoCircle size={20} />{" "}
                <span>{sidebarTexts[langue].credit}</span>
              </li>
            </ul>
          </div>

          {/* Interactive Room */}
          <div className="interactive-room">
            <SceneManager
              year={selectedYear}
              onObjectClick={handleObjectClick}
              langue={langue}
              setLangue={setLangue}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
