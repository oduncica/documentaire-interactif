import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaInfoCircle, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Scene2025({ onObjectClick }) {
  const [showVideo, setShowVideo] = useState(false);
  const [loupeStage, setLoupeStage] = useState("initial"); //
  // 'initial' | 'video' | 'detail'
  const navigate = useNavigate();

  // Ajout des nouvelles icônes dans le tableau, sans changer leur style ni leur taille
  const interactiveObjects = [
    {
      id: "2025-1",
      x: "16%",
      y: "50%",
      icon: <FaPlay />,
      action: () => alert("Information à venir"),
      bgColor: "#5E9197",
    },
    {
      id: "2025-2",
      x: "48%",
      y: "35%",
      icon: <FaPlay />,
      action: () => setShowVideo(true),
      bgColor: "#5E9197",
    },
    {
      id: "2025-3",
      x: "87%",
      y: "62%",
      icon: <FaInfoCircle />, // <-- parenthèse fermante ici !
      action: () => navigate("/reveil#/14"),
      bgColor: "#A96860",
    },
    // Nouvelle icône info
    {
      id: "info-2025",
      x: "55%",
      y: "20%",
      icon: <FaInfoCircle />,
      action: () => alert("Info uniforme"),
      bgColor: "#A96860",
    },
    // Nouvelle icône play
  ];

  // Icône loupe avec cycle vidéo > détail > retour
  const handleLoupeClick = () => {
    if (loupeStage === "initial") setLoupeStage("video");
    else if (loupeStage === "video") setLoupeStage("detail");
    else if (loupeStage === "detail") setLoupeStage("initial");
  };

  // const renderLoupeIcon = () => (
  //   <motion.div
  //     className="loupe-icon"
  //     style={{
  //       position: "absolute",
  //       top: "60%",
  //       left: "60%",
  //       backgroundColor: "#698958",
  //       color: "white",
  //       borderRadius: "50%",
  //       padding: "12px",
  //       cursor: "pointer",
  //       zIndex: 10,
  //       display: "flex",
  //       alignItems: "center",
  //       justifyContent: "center",
  //     }}
  //     onClick={handleLoupeClick}
  //   >
  //     <FaSearch size={24} color="#fff" />
  //   </motion.div>
  // );

  return (
    <div
      className="scene-container"
      style={{
        backgroundImage: "url(/chambre-2025.png)",
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {interactiveObjects.map((obj) => (
        <motion.div
          key={obj.id}
          className="interactive-object"
          style={{
            position: "absolute",
            left: obj.x,
            top: obj.y,
            cursor: "pointer",
            zIndex: 10,
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={obj.action}
        >
          <div
            className="poi-icon"
            style={{
              backgroundColor: obj.bgColor,
            }}
          >
            {obj.icon}
          </div>
        </motion.div>
      ))}

      {/* {loupeStage === "initial" && renderLoupeIcon()} */}
      {loupeStage === "video" && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.9)",
            zIndex: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <video
            src="/video-loupe-2025.mp4"
            autoPlay
            onEnded={() => setLoupeStage("detail")}
            style={{ width: "80vw", height: "auto", borderRadius: "12px" }}
          />
        </div>
      )}
      {loupeStage === "detail" && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.7)",
            zIndex: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handleLoupeClick}
        >
          <img
            src="/detail-loupe-2025.png"
            alt="Détail loupe"
            style={{
              maxWidth: "80vw",
              maxHeight: "80vh",
              borderRadius: "12px",
              cursor: "pointer",
            }}
          />
        </div>
      )}

      {showVideo && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.7)",
            zIndex: 3000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "900px",
              width: "90vw",
              height: "50vw",
              maxHeight: "506px",
              background: "#000",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 2px 16px rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <iframe
              src="https://player.vimeo.com/video/1081650090?h=6557ae9d22&badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "12px",
              }}
              title="S9"
            ></iframe>
            <button
              onClick={() => setShowVideo(false)}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                backgroundColor: "#698958",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "44px",
                height: "44px",
                fontSize: "1.5rem",
                fontWeight: "bold",
                cursor: "pointer",
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                transition: "background 0.2s",
              }}
              aria-label="Fermer"
              title="Fermer"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
