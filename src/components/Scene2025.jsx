import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaInfoCircle, FaSearch, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Scene2025({ onObjectClick }) {
  const [showVideo, setShowVideo] = useState(false);

  // Gestion des deux loupes
  const [loupe1Stage, setLoupe1Stage] = useState("initial"); // 'initial' | 'video' | 'detail'
  const [loupe2Stage, setLoupe2Stage] = useState("initial"); // 'initial' | 'video' | 'detail'

  const navigate = useNavigate();

  // Objets interactifs (inchangé)
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
      icon: <FaInfoCircle />,
      action: () => navigate("/reveil#/14"),
      bgColor: "#A96860",
    },
    {
      id: "info-2025",
      x: "55%",
      y: "20%",
      icon: <FaInfoCircle />,
      action: () => alert("Info uniforme"),
      bgColor: "#A96860",
    },
  ];

  // Gestion du cycle pour chaque loupe
  const handleLoupe1Click = () => {
    if (loupe1Stage === "initial") setLoupe1Stage("video");
    else if (loupe1Stage === "video") setLoupe1Stage("detail");
    else if (loupe1Stage === "detail") setLoupe1Stage("initial");
  };
  const handleLoupe2Click = () => {
    if (loupe2Stage === "initial") setLoupe2Stage("video");
    else if (loupe2Stage === "video") setLoupe2Stage("detail");
    else if (loupe2Stage === "detail") setLoupe2Stage("initial");
  };

  // Rendu des deux loupes
  const renderLoupe1 = () => (
    <motion.div
      className="loupe-icon"
      style={{
        position: "absolute",
        top: "38%",
        left: "48%",
        backgroundColor: "#698958",
        color: "white",
        borderRadius: "50%",
        padding: "12px",
        cursor: "pointer",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      whileHover={{ scale: 1.2 }}
      onClick={handleLoupe1Click}
    >
      <FaSearch size={24} color="#fff" />
    </motion.div>
  );
  const renderLoupe2 = () => (
    <motion.div
      className="loupe-icon"
      style={{
        position: "absolute",
        top: "35%",
        left: "65%",
        backgroundColor: "#698958",
        color: "white",
        borderRadius: "50%",
        padding: "12px",
        cursor: "pointer",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      whileHover={{ scale: 1.2 }}
      onClick={handleLoupe2Click}
    >
      <FaSearch size={24} color="#fff" />
    </motion.div>
  );

  // Affichage principal
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
      {/* Affichage des loupes si elles sont à l'état initial */}
      {loupe1Stage === "initial" && loupe2Stage === "initial" && (
        <>
          {renderLoupe1()}
          {renderLoupe2()}
        </>
      )}

      {/* Loupe 1 : vidéo puis image détail */}
      {loupe1Stage === "video" && (
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
            src="/chambre-2-a-biblio.mp4"
            autoPlay
            onEnded={() => setLoupe1Stage("detail")}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
              borderRadius: 0,
              margin: 0,
              padding: 0,
              background: "black",
            }}
          />
        </div>
      )}
      {loupe1Stage === "detail" && (
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
        >
          <img
            src="/chambre-2025-biblio.png"
            alt="Détail loupe 1"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
              borderRadius: 0,
              margin: 0,
              padding: 0,
              cursor: "default",
              zIndex: 101,
            }}
          />
          {/* Icônes positionnables individuellement */}
          <motion.div
            className="interactive-object"
            style={{
              position: "absolute",
              left: "30%",
              top: "40%",
              cursor: "pointer",
              zIndex: 110,
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => alert("Information sur le détail")}
          >
            <div
              className="poi-icon"
              style={{
                backgroundColor: "#A96860",
                color: "white",
              }}
            >
              <FaInfoCircle />
            </div>
          </motion.div>
          <motion.div
            className="interactive-object"
            style={{
              position: "absolute",
              left: "50%",
              top: "60%",
              cursor: "pointer",
              zIndex: 110,
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => alert("Lecture d'une vidéo ou action play")}
          >
            <div
              className="poi-icon"
              style={{
                backgroundColor: "#5E9197",
                color: "white",
              }}
            >
              <FaPlay />
            </div>
          </motion.div>
          {/* Flèche retour à la place de la loupe */}
          <motion.div
            className="interactive-object"
            style={{
              position: "absolute",
              left: "80%",
              top: "20%",
              cursor: "pointer",
              zIndex: 110,
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "none",
              boxShadow: "none",
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLoupe1Click}
          >
            <img
              src="/fleche-retour.png"
              alt="Retour"
              style={{
                width: 40,
                height: 40,
                objectFit: "contain",
                display: "block",
              }}
            />
          </motion.div>
        </div>
      )}

      {/* Loupe 2 : vidéo puis image détail */}
      {loupe2Stage === "video" && (
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
            src="/chambre-2-a-bureau.mp4"
            autoPlay
            onEnded={() => setLoupe2Stage("detail")}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
              borderRadius: 0,
              margin: 0,
              padding: 0,
              background: "black",
            }}
          />
        </div>
      )}
      {loupe2Stage === "detail" && (
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
        >
          <img
            src="/chambre-2025-bureau.png"
            alt="Détail loupe 2"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
              borderRadius: 0,
              margin: 0,
              padding: 0,
              cursor: "default",
              zIndex: 101,
            }}
          />
          {/* Icônes positionnables individuellement */}
          <motion.div
            className="interactive-object"
            style={{
              position: "absolute",
              left: "35%",
              top: "45%",
              cursor: "pointer",
              zIndex: 110,
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => alert("Information sur le détail")}
          >
            <div
              className="poi-icon"
              style={{
                backgroundColor: "#A96860",
                color: "white",
              }}
            >
              <FaInfoCircle />
            </div>
          </motion.div>
          <motion.div
            className="interactive-object"
            style={{
              position: "absolute",
              left: "55%",
              top: "65%",
              cursor: "pointer",
              zIndex: 110,
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => alert("Lecture d'une vidéo ou action play")}
          >
            <div
              className="poi-icon"
              style={{
                backgroundColor: "#5E9197",
                color: "white",
              }}
            >
              <FaPlay />
            </div>
          </motion.div>
          {/* Flèche retour à la place de la loupe */}
          <motion.div
            className="interactive-object"
            style={{
              position: "absolute",
              left: "75%",
              top: "25%",
              cursor: "pointer",
              zIndex: 110,
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "none",
              boxShadow: "none",
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLoupe2Click}
          >
            <img
              src="/fleche-retour.png"
              alt="Retour"
              style={{
                width: 40,
                height: 40,
                objectFit: "contain",
                display: "block",
              }}
            />
          </motion.div>
        </div>
      )}

      {/* Les autres objets interactifs */}
      {loupe1Stage === "initial" &&
        loupe2Stage === "initial" &&
        interactiveObjects.map((obj) => (
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

      {/* ...reste du code inchangé pour showVideo... */}
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
