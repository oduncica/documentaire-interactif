import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import SceneManager from "./components/SceneManager";
import LanguesDrapeau from "./components/LanguesDrapeau";
import HamburgerMenu from "./components/HamburgerMenu";
import RotatePhone from "./components/RotatePhone";
import Preloader from "./components/Preloader";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaFilm,
  FaBook,
  FaInfoCircle,
  FaDoorOpen,
} from "react-icons/fa";
import "./App.css";

const mediaToPreload = [
  "/chambre-1980.png",
  "/chambre-2000.png",
  "/chambre-2025.png",
  "/chambre-1980-biblio.png",
  "/chambre-1980-bureau.png",
  "/chambre-2025-biblio.png",
  "/chambre-2025-bureau.png",
  "/chambre-2-a-biblio.mp4",
  "/chambre-2-a-bureau.mp4",
  "/chambre-1-a-biblio.mp4",
  "/chambre-1-a-bureau.mp4",
  "/fleche-retour.png",
  "/home.png",
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState("1980");
  const [showVideo, setShowVideo] = useState(false);
  const [langue, setLangue] = useState("fr");

  const handleObjectClick = (obj) => {
    navigate(`/object/${obj.id}`);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const yearLabels = {
    fr: { 1980: "Passé", 2025: "Présent" },
    kr: { 1980: "과거", 2025: "현재" },
  };

  const sidebarTexts = {
    fr: {
      home: "Accueil",
      room: "The Room",
      doc: "Complete Documentary",
      biblio: "Bibliographie",
      scenes: "Scènes Complémentaires",
      credit: "Crédit",
      close: "Fermer",
    },
    kr: {
      home: "홈",
      room: "방",
      doc: "전체 다큐멘터리",
      biblio: "참고문헌",
      scenes: "추가 장면",
      credit: "크레딧",
      close: "닫기",
    },
  };

  const isActive = (path) => location.pathname === path;

  // Affiche le loader uniquement sur la landing page "/"
  const showLoader = location.pathname === "/";

  return (
    <Preloader media={mediaToPreload} showLoader={showLoader}>
      <div className="app">
        <RotatePhone />
        {showVideo ? (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              zIndex: 1000,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href="https://vimeo.com/1082031152"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                width: "100%",
                maxWidth: "900px",
                height: "506px",
                backgroundImage:
                  "url('https://i.vimeocdn.com/video/2012937618-5b85854c86d8d88b6962451c0bc289d084f56f2440391eae7dc94a7f13359756-d?mw=3100&mh=854&q=70')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              {/* Placeholder pour l'image */}
            </a>

            <button
              onClick={() => setShowVideo(false)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                backgroundColor: "#698958",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "44px",
                height: "44px",
                fontSize: "1.5rem",
                fontWeight: "bold",
                cursor: "pointer",
                zIndex: 1001,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                transition: "background 0.2s",
              }}
              aria-label="Fermer"
            >
              <FaTimes size={22} />
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
                </button>
              </div>
              <ul className="sidebar-menu">
                <li
                  className={isActive("/") ? "active" : ""}
                  onClick={() => {
                    setIsSidebarOpen(false);
                    navigate("/");
                  }}
                >
                  <FaHome size={20} /> <span>{sidebarTexts[langue].home}</span>
                </li>
                <li
                  className={isActive("/chambre") ? "active" : ""}
                  onClick={() => {
                    setIsSidebarOpen(false);
                    navigate("/chambre");
                  }}
                >
                  <FaDoorOpen size={20} />{" "}
                  <span>{sidebarTexts[langue].room}</span>
                </li>
                <li
                  className={showVideo ? "active" : ""}
                  onClick={() => {
                    setIsSidebarOpen(false);
                    setShowVideo(true);
                  }}
                >
                  <FaFilm size={20} /> <span>{sidebarTexts[langue].doc}</span>
                </li>
                <li
                  className={isActive("/reveil") ? "active" : ""}
                  onClick={() => {
                    setIsSidebarOpen(false);
                    navigate("/reveil");
                  }}
                >
                  <FaBook size={20} />{" "}
                  <span>{sidebarTexts[langue].biblio}</span>
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
    </Preloader>
  );
}

export default App;
