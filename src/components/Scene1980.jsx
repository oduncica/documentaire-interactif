import React, { useState } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import { FaPlay, FaEye, FaInfoCircle } from "react-icons/fa";

export default function Scene1980({ onObjectClick }) {
  const [stage, setStage] = useState("initial"); // 'initial' | 'video' | 'detail'

  const handleEyeClick = () => {
    if (stage === "initial") {
      setStage("video");
    } else {
      setStage("initial");
    }
  };

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
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          {renderEyeIcon()}
        </div>
      )}

      {stage === "video" && (
        <ReactPlayer
          url="/chambre3-a-bureau.mp4"
          playing
          controls={false}
          onEnded={() => setStage("detail")}
          width="100%"
          height="100%"
        />
      )}

      {stage === "detail" && (
        <div
          className="zoomed-image"
          style={{
            backgroundImage: "url(/chambre-1980-bureau.png)",
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          {renderEyeIcon()}

          {[
            {
              id: 1,
              x: "40%",
              y: "60%",
              icon: <FaPlay />,
              action: () => onObjectClick({ id: 1 }),
            },
            {
              id: 2,
              x: "60%",
              y: "40%",
              icon: <FaInfoCircle />,
              action: () => alert("Information sur l'objet"),
            },
            {
              id: 3,
              x: "30%",
              y: "30%",
              icon: <FaPlay />,
              action: () => alert("Lecture d'une autre vidéo"),
            },
          ].map((obj) => (
            <motion.div
              key={obj.id}
              className="interactive-object"
              style={{
                left: obj.x,
                top: obj.y,
                position: "absolute",
                cursor: "pointer",
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={obj.action}
            >
              <div className="poi-icon">{obj.icon}</div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
