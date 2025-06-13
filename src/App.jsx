import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation, Routes, Route } from "react-router-dom";
import SceneManager from "./components/SceneManager";
import LanguesDrapeau from "./components/LanguesDrapeau";
import HamburgerMenu from "./components/HamburgerMenu";
import RotatePhone from "./components/RotatePhone";
import Preloader from "./components/Preloader";
import LandingPage from "./LandingPage";
import Intro from "./Intro";
import ObjectPage from "./ObjectPage";
import Reveil from "./Reveil";
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

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState("1980");
  const [showVideo, setShowVideo] = useState(false);
  const [langue, setLangue] = useState("fr");
  const navigate = useNavigate();
  const location = useLocation();

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
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/intro-interactif" element={<Intro />} />
        <Route
          path="/chambre"
          element={
            <div className="app">
              <RotatePhone />
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
              <LanguesDrapeau
                selectedLang={langue}
                setSelectedLang={setLangue}
              />
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
                    <FaHome size={20} />{" "}
                    <span>{sidebarTexts[langue].home}</span>
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
            </div>
          }
        />
        <Route path="/reveil" element={<Reveil />} />
        <Route path="/object/:id" element={<ObjectPage />} />
        <Route path="*" element={<h1>404 - Page non trouvée</h1>} />
      </Routes>
    </Preloader>
  );
}
