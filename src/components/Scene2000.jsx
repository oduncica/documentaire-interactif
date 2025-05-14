import React from "react";
import { motion } from "framer-motion";
import { FaPlay, FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Scene2010() {
  const navigate = useNavigate();

  const interactiveObjects = [
    {
      id: "2000-1",
      x: "30%",
      y: "60%",
      icon: <FaPlay />,
      action: () => alert("Lecture vidéo 2000"),
    },
    {
      id: "2000-2",
      x: "55%",
      y: "40%",
      icon: <FaInfoCircle />,
      action: () => navigate("/reveil#/3"),
    },
    {
      id: "2000-3",
      x: "70%",
      y: "75%",
      icon: <FaInfoCircle />,
      action: () => alert("Lecture info"),
    },
  ];

  return (
    <div
      className="scene-container"
      style={{
        backgroundImage: "url(/chambre-2000.png)",
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
    </div>
  );
}
