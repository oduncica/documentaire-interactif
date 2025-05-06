import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "#414B6F",
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
      {/* Drapeaux en haut à droite */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          display: "flex",
          gap: "10px",
        }}
      >
        <img
          src="/drapeau-coree.jpg"
          alt="Corée"
          style={{ width: "32px", height: "20px", borderRadius: "4px" }}
        />
        <img
          src="/drapeau-france.jpg"
          alt="France"
          style={{ width: "32px", height: "20px", borderRadius: "4px" }}
        />
      </div>

      {/* Vidéo Vimeo */}
      <div
        style={{
          width: "90%",
          maxWidth: "800px",
          aspectRatio: "16 / 9",
          position: "relative",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/1081536214?autoplay=1&title=0&byline=0&portrait=0"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Vimeo Video"
        />
      </div>

      {/* Boutons immédiatement sous la vidéo */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          marginTop: "16px",
        }}
      >
        <button
          onClick={() => navigate("/film-complet")}
          style={{
            backgroundColor: "#ffffff",
            color: "#414B6F",
            border: "none",
            padding: "12px 24px",
            borderRadius: "20px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Film complet
        </button>

        <button
          onClick={() => navigate("/intro-interactif")}
          style={{
            backgroundColor: "#ffffff",
            color: "#414B6F",
            border: "none",
            padding: "12px 24px",
            borderRadius: "20px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Interactif
        </button>
      </div>
    </div>
  );
}
