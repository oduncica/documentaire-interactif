import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaPlay, FaInfoCircle, FaTimes } from "react-icons/fa";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

export default function Scene1980({ onObjectClick }) {
  const [stage, setStage] = useState("initial");
  const navigate = useNavigate();
  const [showAllIcons, setShowAllIcons] = useState(false);

  // Loupe 1
  const handleLoupe1Click = () => {
    if (stage === "initial") setStage("video1");
    else if (stage === "detail1") setStage("initial");
  };

  // Loupe 2
  const handleLoupe2Click = () => {
    if (stage === "initial") setStage("video2");
    else if (stage === "detail2") setStage("initial");
  };

  const closeVimeoVideo = () => {
    setStage("initial");
  };

  const initialInteractiveObjects = [
    {
      id: "init-1",
      x: "14%",
      y: "60%",
      icon: <FaPlay />,
      action: () => {
        setStage("video-vimeo");
        setShowAllIcons(true);
      },
      bgColor: "#5E9197",
    },
    {
      id: "init-2",
      x: "44%",
      y: "19%",
      icon: <FaInfoCircle />,
      action: () => alert("Infos à venir"),
      bgColor: "#5E9197",
    },
    {
      id: "init-3",
      x: "53%",
      y: "15%",
      icon: <FaPlay />,
      action: () => setStage("video-vimeo3"),
      bgColor: "#5E9197",
    },
    {
      id: "init-4",
      x: "92%",
      y: "54%",
      icon: <FaInfoCircle />,
      action: () => navigate("/reveil#/9"),
      bgColor: "#A96860",
    },
    {
      id: "init-5",
      x: "80%",
      y: "66%",
      icon: <FaPlay />,
      action: () => setStage("video-vimeo-s6"),
      bgColor: "#5E9197",
    },
  ];

  const detailInteractiveObjects = [
    {
      id: "detail-1",
      x: "25%",
      y: "63%",
      icon: <FaInfoCircle />,
      action: () => alert("Information sur l'objet final"),
      bgColor: "#A96860",
    },
    {
      id: "detail-2",
      x: "49%",
      y: "54%",
      icon: <FaPlay />,
      action: () => setStage("video-vimeo-s6"),
      bgColor: "#5E9197",
    },
  ];
  const detail2InteractiveObjects = [
    {
      id: "detail2-1",
      x: "50%",
      y: "46%",
      icon: <FaPlay />,
      action: () => alert("Vidéo à venir"),
      bgColor: "#5E9197",
    },
    {
      id: "detail2-2",
      x: "56%",
      y: "10%",
      icon: <FaInfoCircle />,
      action: () => navigate("/reveil#/12"),
      bgColor: "#A96860",
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
        top: "38%",
        left: "52%",
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

  // Fond de la chambre toujours visible
  const backgroundStyle = {
    background: `url(/chambre-1980.png) center/cover no-repeat`,
    width: "100%",
    height: "100%",
    position: "relative",
    transition: "background 0.2s",
  };

  return (
    <div className="scene-container" style={backgroundStyle}>
      {/* IMAGE PRINCIPALE AVEC LES DEUX LOUPES */}
      {stage === "initial" && (
        <>
          {renderLoupe1()}
          {renderLoupe2()}
          {renderIcons(initialInteractiveObjects)}
        </>
      )}

      {/* LOUPE 1 : vidéo puis détail */}
      {stage === "video1" && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            pointerEvents: "auto",

            position: "fixed",
            inset: 0,
            objectFit: "cover",
            transform: "scale(1.1)",
            zIndex: 1000,
          }}
        >
          <video
            src="/chambre-1-a-bureau.mp4"
            autoPlay
            onEnded={() => setStage("detail1")}
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
              zIndex: 101,
            }}
          />
        </div>
      )}
      {stage === "detail1" && (
        <div
          className="zoomed-image"
          style={{
            backgroundImage: "url(/chambre-1980-bureau.png)",
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
          {renderIcons(detailInteractiveObjects)}
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
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            pointerEvents: "auto",

            position: "fixed",
            inset: 0,
            objectFit: "cover",
            transform: "scale(1.1)",
            zIndex: 1000,
          }}
        >
          <video
            src="/chambre-1-a-biblio.mp4"
            autoPlay
            onEnded={() => setStage("detail2")}
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
              zIndex: 101,
            }}
          />
        </div>
      )}
      {stage === "detail2" && (
        <div
          className="zoomed-image"
          style={{
            backgroundImage: "url(/chambre-1980-biblio.png)",
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

      {/* Vimeo vidéos : le fond chambre reste visible */}
      {stage === "video-vimeo" && (
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
              onClick={closeVimeoVideo}
              style={{
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
              }}
              aria-label="Fermer"
              title="Fermer"
            >
              <FaTimes size={22} />
            </button>
          </div>
          <motion.div
            onClick={() => navigate("/reveil")}
            style={{
              position: "absolute",
              bottom: "80px",
              right: "calc(32px + 7cm)",
              background: "#698958",
              color: "#fff",
              padding: "10px 16px",
              borderRadius: "8px",
              cursor: "pointer",
              zIndex: 3010,
              fontSize: "14px",
              fontWeight: "bold",
            }}
            whileHover={{ scale: 1.1 }}
          >
            Plus de détails
          </motion.div>
        </div>
      )}

      {stage === "video-vimeo3" && (
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
              src="https://player.vimeo.com/video/1081720802?h=a29f97c0f4&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "12px",
              }}
              title="S3"
            ></iframe>
            <button
              onClick={closeVimeoVideo}
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
              <FaTimes size={22} />
            </button>
          </div>
        </div>
      )}

      {stage === "video-vimeo-s6" && (
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
              src="https://player.vimeo.com/video/1081719738?h=3a90542dc3&badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "12px",
              }}
              title="S6"
            ></iframe>
            <button
              onClick={closeVimeoVideo}
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
              <FaTimes size={22} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
