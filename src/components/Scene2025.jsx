import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaInfoCircle, FaSearch, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Scene2025({ onObjectClick }) {
  const [stage, setStage] = useState("initial");
  const [detail1Loaded, setDetail1Loaded] = useState(false);
  const [detail2Loaded, setDetail2Loaded] = useState(false);
  const [video1Ready, setVideo1Ready] = useState(false);
  const [video2Ready, setVideo2Ready] = useState(false);
  const [showVimeo, setShowVimeo] = useState(false);
  const [showUniformeVimeo, setShowUniformeVimeo] = useState(false);
  const [showDetail2Vimeo, setShowDetail2Vimeo] = useState(false);
  const [showInit2Vimeo, setShowInit2Vimeo] = useState(false);
  const [previousStage, setPreviousStage] = useState(null);
  const navigate = useNavigate();

  // Loupe 1
  const handleLoupe1Click = () => {
    if (stage === "initial") {
      setVideo1Ready(false);
      setStage("video1");
    } else if (stage === "detail1") setStage("initial");
  };

  // Loupe 2
  const handleLoupe2Click = () => {
    if (stage === "initial") {
      setVideo2Ready(false);
      setStage("video2");
    } else if (stage === "detail2") setStage("initial");
  };

  // Pour chaque modale Vimeo, on utilise une fonction de fermeture générique
  const closeVimeoModal = (setShow) => {
    setShow(false);
    if (previousStage) {
      setStage(previousStage);
      setPreviousStage(null);
    }
  };

  // Préchargement image de détail 1
  const handleVideo1End = () => {
    const img = new window.Image();
    img.src = "/chambre-2025-biblio.png";
    img.onload = () => {
      setDetail1Loaded(true);
      setStage("detail1");
    };
  };

  // Préchargement image de détail 2
  const handleVideo2End = () => {
    const img = new window.Image();
    img.src = "/chambre-2025-bureau.png";
    img.onload = () => {
      setDetail2Loaded(true);
      setStage("detail2");
    };
  };

  const initialInteractiveObjects = [
    {
      // Objet reveil présent
      id: "init-1",
      x: "12%",
      y: "51%",
      icon: <FaPlay />,
      action: () => setShowVimeo(true),
      bgColor: "#5E9197",
    },
    {
      // Objet lampe présent
      id: "init-2",
      x: "46%",
      y: "38%",
      icon: <FaPlay />,
      action: () => setShowInit2Vimeo(true),
      bgColor: "#5E9197",
    },
    {
      // Objet Sac à dos présent
      id: "init-3",
      x: "87%",
      y: "62%",
      icon: <FaInfoCircle />,
      action: () => navigate("/reveil#/40"),
      bgColor: "#A96860",
    },
    {
      // Objet Uniforme présent
      id: "info-2025",
      x: "53%",
      y: "25%",
      icon: <FaPlay />,
      action: () => setShowUniformeVimeo(true),
      bgColor: "#5E9197",
    },
  ];

  const detail1InteractiveObjects = [
    {
      id: "detail1-1",
      x: "50%",
      y: "8%",
      icon: <FaInfoCircle />,
      action: () => navigate("/reveil#/27"),
      bgColor: "#A96860",
    },
    {
      id: "detail1-2",
      x: "54%",
      y: "50%",
      icon: <FaInfoCircle />,
      action: () => navigate("/reveil#/21"),
      bgColor: "#A96860",
    },
  ];

  const detail2InteractiveObjects = [
    {
      id: "detail2-1",
      x: "85%",
      y: "36%",
      icon: <FaInfoCircle />,
      action: () => navigate("/reveil#/25"),
      bgColor: "#A96860",
    },
    {
      id: "detail2-2",
      x: "42%",
      y: "35%",
      icon: <FaInfoCircle />,
      action: () => navigate("/reveil#/23"),
      bgColor: "#A96860",
    },
    {
      id: "detail2-3",
      x: "12%",
      y: "45%",
      icon: <FaPlay />,
      action: () => {
        setPreviousStage("detail2");
        setShowDetail2Vimeo(true);
      },
      bgColor: "#5E9197",
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
        <div
          className="poi-icon"
          style={{
            backgroundColor: obj.bgColor,
            color: obj.color || "white",
          }}
        >
          {obj.icon}
        </div>
      </motion.div>
    ));

  // Loupe 1
  const renderLoupe1 = () => (
    <motion.div
      className="eye-icon"
      style={{
        position: "absolute",
        top: "46%",
        left: "67%",
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

  // Loupe 2
  const renderLoupe2 = () => (
    <motion.div
      className="eye-icon"
      style={{
        position: "absolute",
        top: "48%",
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
      onClick={handleLoupe2Click}
    >
      <FaSearch size={24} color="#fff" />
    </motion.div>
  );

  return (
    <>
      {/* IMAGE PRINCIPALE AVEC LES DEUX LOUPES */}
      {stage === "initial" && (
        <div
          className="scene-container"
          style={{
            background: `url(/chambre-2025.png) center/cover no-repeat`,
            width: "100%",
            height: "100%",
            position: "relative",
            transition: "background 0.2s",
          }}
        >
          {renderLoupe1()}
          {renderLoupe2()}
          {renderIcons(initialInteractiveObjects)}
        </div>
      )}

      {/* LOUPE 1 : vidéo puis détail */}
      {stage === "video1" && (
        <>
          {/* Affiche l'image initiale tant que la vidéo n'est pas prête */}
          {!video1Ready && (
            <div
              style={{
                background: `url(/chambre-2025.png) center/cover no-repeat`,
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 999,
              }}
            />
          )}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: 1000,
              pointerEvents: "auto",
              background: "transparent",
              margin: 0,
              padding: 0,
              border: "none",
              overflow: "hidden",
            }}
          >
            <video
              src="/chambre-2-a-biblio.mp4"
              autoPlay
              onCanPlay={() => setVideo1Ready(true)}
              onEnded={handleVideo1End}
              style={{
                position: "fixed",
                width: "100vw",
                height: "100vh",
                objectFit: "cover",
                border: "none",
                margin: 0,
                padding: 0,
                background: "transparent",
                display: "block",
                boxSizing: "border-box",
                overflow: "hidden",
                inset: 0,
                transform: "scale(1.1)",
                zIndex: 1001,
              }}
            />
          </div>
        </>
      )}
      {stage === "detail1" && detail1Loaded && (
        <div
          className="zoomed-image"
          style={{
            backgroundImage: "url(/chambre-2025-biblio.png)",
            width: "100vw",
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 102,
          }}
        >
          {renderIcons(detail1InteractiveObjects)}
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

      {/* LOUPE 2 : vidéo puis détail */}
      {stage === "video2" && (
        <>
          {!video2Ready && (
            <div
              style={{
                background: `url(/chambre-2025.png) center/cover no-repeat`,
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 999,
              }}
            />
          )}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              pointerEvents: "auto",
              background: "transparent",
              margin: 0,
              padding: 0,
              border: "none",
              overflow: "hidden",
              inset: 0,
              objectFit: "cover",
              transform: "scale(1.1)",
              zIndex: 1000,
            }}
          >
            <video
              src="/chambre-2-a-bureau.mp4"
              autoPlay
              onCanPlay={() => setVideo2Ready(true)}
              onEnded={handleVideo2End}
              style={{
                position: "fixed",
                inset: 0,
                width: "100vw",
                height: "100vh",
                objectFit: "cover",
                border: "none",
                margin: 0,
                padding: 0,
                background: "transparent",
                zIndex: 1001,
                display: "block",
                boxSizing: "border-box",
                overflow: "hidden",
              }}
            />
          </div>
        </>
      )}
      {stage === "detail2" && detail2Loaded && (
        <div
          className="zoomed-image"
          style={{
            backgroundImage: "url(/chambre-2025-bureau.png)",
            width: "100vw",
            height: "100vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 102,
          }}
        >
          {renderIcons(detail2InteractiveObjects)}
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

      {/* Modale vidéo Vimeo */}
      {showVimeo && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <iframe
              src="https://player.vimeo.com/video/1096388548?h=252dc5565f&color=ffffff&title=0&byline=0&portrait=0"
              width="640"
              height="360"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={iframeStyle}
              title="Éducation sous pression - 1 - Réveil"
            ></iframe>
            <motion.div
              onClick={() => {
                setShowVimeo(false);
                navigate("/reveil");
              }}
              style={plusDetailsStyle}
              whileHover={{ scale: 1.1 }}
            >
              Plus de détails
            </motion.div>
            <button
              onClick={() => closeVimeoModal(setShowVimeo)}
              style={closeBtnStyle}
              aria-label="Fermer"
              title="Fermer"
            >
              <FaTimes size={22} />
            </button>
          </div>
        </div>
      )}

      {/* Modale vidéo Uniforme Vimeo */}
      {showUniformeVimeo && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <iframe
              src="https://player.vimeo.com/video/1096389010?h=2456273caa&color=ffffff&title=0&byline=0&portrait=0"
              width="640"
              height="360"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={iframeStyle}
              title="Éducation sous pression - 2 - Uniforme"
            ></iframe>
            <motion.div
              onClick={() => {
                setShowUniformeVimeo(false);
                navigate("/reveil#/27");
              }}
              style={plusDetailsStyle}
              whileHover={{ scale: 1.1 }}
            >
              Plus de détails
            </motion.div>
            <button
              onClick={() => closeVimeoModal(setShowUniformeVimeo)}
              style={closeBtnStyle}
              aria-label="Fermer"
              title="Fermer"
            >
              <FaTimes size={22} />
            </button>
          </div>
        </div>
      )}

      {/* Modale vidéo Detail 2 Vimeo */}
      {showDetail2Vimeo && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <iframe
              src="https://player.vimeo.com/video/1096391336?h=9339c5c4a1&color=ffffff&title=0&byline=0&portrait=0"
              width="640"
              height="360"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={iframeStyle}
              title="Éducation sous pression - 3 - Sac"
            ></iframe>
            <motion.div
              onClick={() => {
                setShowDetail2Vimeo(false);
                navigate("/reveil#/19");
              }}
              style={plusDetailsStyle}
              whileHover={{ scale: 1.1 }}
            >
              Plus de détails
            </motion.div>
            <button
              onClick={() => closeVimeoModal(setShowDetail2Vimeo)}
              style={closeBtnStyle}
              aria-label="Fermer"
              title="Fermer"
            >
              <FaTimes size={22} />
            </button>
          </div>
        </div>
      )}

      {/* Modale vidéo Init 2 Vimeo (Lampe) */}
      {showInit2Vimeo && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <iframe
              src="https://player.vimeo.com/video/1096392837?h=908ea6afc7&color=ffffff&title=0&byline=0&portrait=0"
              width="640"
              height="360"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={iframeStyle}
              title="Éducation sous pression - 4 - Lampe"
            ></iframe>
            <motion.div
              onClick={() => {
                setShowInit2Vimeo(false);
                navigate("/reveil#/22");
              }}
              style={plusDetailsStyle}
              whileHover={{ scale: 1.1 }}
            >
              Plus de détails
            </motion.div>
            <button
              onClick={() => closeVimeoModal(setShowInit2Vimeo)}
              style={closeBtnStyle}
              aria-label="Fermer"
              title="Fermer"
            >
              <FaTimes size={22} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// Styles utilisés pour les modales
const modalStyle = {
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
};
const modalContentStyle = {
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
};
const iframeStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  borderRadius: "12px",
};
const plusDetailsStyle = {
  position: "absolute",
  bottom: "32px",
  right: "32px",
  background: "#698958",
  color: "#fff",
  padding: "10px 16px",
  borderRadius: "8px",
  cursor: "pointer",
  zIndex: 3010,
  fontSize: "14px",
  fontWeight: "bold",
};
const closeBtnStyle = {
  position: "absolute",
  top: "8px",
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
};
