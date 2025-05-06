import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

export default function Scene2025({ onObjectClick }) {
  const [showVideo, setShowVideo] = useState(false);

  const interactiveObjects = [
    {
      id: "2025-1",
      x: "16%",
      y: "50%",
      icon: <FaPlay />,
      action: () => alert("Information 2025"),
    },
    {
      id: "2025-2",
      x: "48%",
      y: "35%",
      icon: <FaPlay />,
      action: () => setShowVideo(true), // Affiche la vidéo
    },
    {
      id: "2025-3",
      x: "87%",
      y: "62%",
      icon: <FaInfoCircle />,
      action: () => onObjectClick?.({ id: 3 }),
    },
  ];

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
          <div className="poi-icon">{obj.icon}</div>
        </motion.div>
      ))}

      {showVideo && (
        <div
          className="video-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
              width: "100%",
            }}
          >
            <iframe
              src="https://player.vimeo.com/video/1081650090?h=6557ae9d22&badge=0&autopause=0&player_id=0&app_id=58479"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="S9"
              allowFullScreen
            ></iframe>
          </div>

          <button
            onClick={() => setShowVideo(false)}
            style={{
              position: "absolute",
              top: "20px",
              right: "30px",
              background: "white",
              border: "none",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              fontSize: "1.2rem",
              fontWeight: "bold",
              cursor: "pointer",
              lineHeight: "40px",
              textAlign: "center",
            }}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
