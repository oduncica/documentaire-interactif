import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LanguesDrapeau from "./components/LanguesDrapeau";
import HamburgerMenu from "./components/HamburgerMenu";
import "./App.css";
import { FaPlay } from "react-icons/fa";
import { PiDoorOpenDuotone } from "react-icons/pi";

import { FaTimes, FaHome, FaFilm, FaBook, FaInfoCircle } from "react-icons/fa";
export default function LandingPage() {
  const navigate = useNavigate();
  const [langue, setLangue] = useState("fr");
  const [showVideo, setShowVideo] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const textes = {
    fr: {
      titre: "Education sous pression",
      paragraphe: `Derrière l’image d’excellence que projette le système éducatif sud-coréen se cache une mécanique strictement codifiée, héritée d’une culture réglementaire longtemps valorisée.`,
      bouton1: "Le documentaire complet",
      bouton2: "L'expérience interactive",
    },
    kr: {
      titre: "한국 교육 속 규제문화",
      paragraphe: `한국 교육 시스템이 보여주는 탁월한 모습 뒤에는 오랫동안 중시되어 온 규범 중심의 문화에서 비롯된 규제문화들이 숨어 있다.
오랫동안 형성되고 지속되어온 이 문화는 오늘날까지도 학생들의 일상에 깊이 뿌리내리고 있다. 그렇다면 이러한 규제문화는 오늘날 어떻게 나타나고 있으며, 한국의 젊은 세대는 이를 어떻게 받아들이고 있을까?
`,
      bouton1: "전체 다큐멘터리 보기",
      bouton2: "인터랙티브 체험",
    },
  };

  return (
    <div
      style={{
        backgroundImage: "url('/home.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Menu hamburger en haut à gauche */}
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 1001,
        }}
      >
        <HamburgerMenu onClick={toggleSidebar} />
      </div>
      {/* Menu latéral */}

      <div className={`sidebar${isSidebarOpen ? " open" : ""}`}>
        {isSidebarOpen && (
          <>
            <div className="sidebar-header">
              <button className="close-btn" onClick={toggleSidebar}>
                <FaTimes size={30} color="#fff" />
              </button>
            </div>
            <ul className="sidebar-menu">
              <li
                onClick={() => {
                  setIsSidebarOpen(false);
                  navigate("/chambre");
                }}
              >
                <FaHome size={20} /> <span>The Room</span>
              </li>
              <li
                onClick={() => {
                  setIsSidebarOpen(false);
                  setShowVideo(true);
                }}
              >
                <FaFilm size={20} /> <span>Complete Documentary</span>
              </li>
              <li
                onClick={() => {
                  setIsSidebarOpen(false);
                  navigate("/reveil");
                }}
              >
                <FaBook size={20} /> <span>Bibliographie</span>
              </li>
              <li>
                <FaInfoCircle size={20} /> <span>Scènes Complémentaires</span>
              </li>
              <li>
                <FaInfoCircle size={20} /> <span>Crédit</span>
              </li>
            </ul>
          </>
        )}
      </div>

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
          <a
            href="https://vimeo.com/1082031152"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              width: "100%",
              maxWidth: "640px",
              height: "360px",
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
          {/* Drapeaux */}
          <LanguesDrapeau selectedLang={langue} setSelectedLang={setLangue} />

          {/* Contenu avec texte traduit */}
          <div
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "700px",
              textAlign: "center",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h1
              style={{
                color: "#ffffff",
                fontSize: "3rem",
                marginBottom: "1rem",
              }}
            >
              {textes[langue].titre}
            </h1>

            <p
              style={{
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "1.6",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              {textes[langue].paragraphe}
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                marginTop: "20px",
                justifyContent: "center",
              }}
            >
              <button
                onClick={() =>
                  window.open(
                    "https://vimeo.com/1082031152",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                style={{
                  backgroundColor: "#32465A",
                  color: "#ffffff",
                  border: "none",
                  padding: "12px 24px",
                  borderRadius: "20px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <FaPlay size={18} style={{ marginRight: "8px" }} />
                {textes[langue].bouton1}
              </button>

              <button
                onClick={() => navigate("/chambre")}
                style={{
                  backgroundColor: "#698958",
                  color: "#ffffff",
                  border: "none",
                  padding: "12px 24px",
                  borderRadius: "20px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <PiDoorOpenDuotone size={20} style={{ marginRight: "8px" }} />
                {textes[langue].bouton2}
              </button>
            </div>
          </div>
        </>
      )}
      {/* Logos en bas à gauche et à droite */}
      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: 0,
          width: "95vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pointerEvents: "none", // pour ne pas gêner les clics sur le contenu
          zIndex: 1001,
          padding: "0 32px",
        }}
      >
        <img
          src="/logo.png"
          alt="Logo gauche"
          style={{ height: "48px", pointerEvents: "auto" }}
        />
        <img
          src="/logo2.png"
          alt="Logo droite"
          style={{ height: "48px", pointerEvents: "auto" }}
        />
      </div>
    </div>
  );
}
