import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPlay,
  FaEye,
  FaInfoCircle,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Scene1980({ onObjectClick }) {
  const [stage, setStage] = useState("initial"); // 'initial' | 'video' | 'detail'
  const navigate = useNavigate();

  const handleEyeClick = () => {
    setStage(stage === "initial" ? "video" : "initial");
  };

  const handleCloseVideo = () => {
    setStage("initial");
  };

  const initialInteractiveObjects = [
    {
      id: "init-1",
      x: "15%",
      y: "61%",
      icon: <FaPlay />,
      action: () => setStage("video"),
    },
    {
      id: "init-2",
      x: "50%",
      y: "25%",
      icon: <FaPlay />,
      action: () => alert("Objet interactif 2 : lecture d'une autre vidéo"),
    },
    {
      id: "init-3",
      x: "70%",
      y: "70%",
      icon: <FaInfoCircle />,
      action: () => alert("Objet interactif 3 : info sur un objet"),
    },
  ];

  const detailInteractiveObjects = [
    {
      id: "detail-1",
      x: "40%",
      y: "60%",
      icon: <FaPlay />,
      action: () => onObjectClick({ id: 1 }),
    },
    {
      id: "detail-2",
      x: "45%",
      y: "57%",
      icon: <FaPlay />,
      action: () => onObjectClick({ id: 1 }),
    },
    {
      id: "detail-3",
      x: "60%",
      y: "40%",
      icon: <FaInfoCircle />,
      action: () => alert("Information sur l'objet final"),
    },
    {
      id: "detail-4",
      x: "30%",
      y: "30%",
      icon: <FaPlay />,
      action: () => alert("Lecture d'une autre vidéo"),
    },
  ];

  const renderIcons = (objects) =>
    objects.map((obj) => (
      <motion.div
        key={obj.id}
        className="interactive-object"
        style={{
          left: obj.x,
          top: obj.y,
          position: "absolute",
          cursor: "pointer",
          zIndex: 10,
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={obj.action}
      >
        <div className="poi-icon">{obj.icon}</div>
      </motion.div>
    ));

  const renderEyeIcon = () => (
    <motion.div
      className="eye-icon"
      style={{
        position: "absolute",
        bottom: "20px",
        right: "20px",
        background: "rgba(0,0,0,0.6)",
        borderRadius: "50%",
        padding: "12px",
        cursor: "pointer",
        zIndex: 10,
      }}
      whileHover={{ scale: 1.2 }}
      onClick={handleEyeClick}
    >
      <FaEye size={24} color="#fff" />
    </motion.div>
  );

  return (
    <div
      className="scene-container"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      {stage === "initial" && (
        <div
          className="initial-image"
          style={{
            backgroundImage: "url(/chambre-1980.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          {renderEyeIcon()}
          {renderIcons(initialInteractiveObjects)}
        </div>
      )}

      {stage === "video" && (
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            backgroundColor: "black",
          }}
        >
          <iframe
            src="https://player.vimeo.com/video/1081536214?autoplay=1&title=0&byline=0&portrait=0"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Vimeo Video"
            style={{ position: "absolute", top: 0, left: 0 }}
          ></iframe>

          {/* Close Button */}
          <motion.div
            onClick={handleCloseVideo}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "rgba(0, 0, 0, 0.6)",
              borderRadius: "50%",
              padding: "10px",
              cursor: "pointer",
              zIndex: 20,
            }}
            whileHover={{ scale: 1.2 }}
          >
            <FaTimes size={24} color="#fff" />
          </motion.div>

          {/* More Details Button */}
          <motion.button
            onClick={() => navigate("/reveil")}
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              backgroundColor: "#007BFF",
              color: "white",
              padding: "10px 16px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              zIndex: 20,
            }}
            whileHover={{ scale: 1.05 }}
          >
            More details <FaArrowRight />
          </motion.button>
        </div>
      )}

      {stage === "detail" && (
        <div
          className="zoomed-image"
          style={{
            backgroundImage: "url(/chambre-1980-bureau.png)",
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          {renderEyeIcon()}
          {renderIcons(detailInteractiveObjects)}
        </div>
      )}
    </div>
  );
}
