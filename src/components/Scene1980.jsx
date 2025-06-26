import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaPlay, FaInfoCircle, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Scene1980({ onObjectClick }) {
  const [stage, setStage] = useState("initial");
  const [detail1Loaded, setDetail1Loaded] = useState(false);
  const [detail2Loaded, setDetail2Loaded] = useState(false);
  const [video1Ready, setVideo1Ready] = useState(false);
  const [video2Ready, setVideo2Ready] = useState(false);
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

  // Fermer la vidéo Vimeo
  const closeVimeoVideo = () => {
    if (previousStage) {
      setStage(previousStage);
      setPreviousStage(null);
    } else {
      setStage("initial");
    }
  };

  // Préchargement image de détail 1
  const handleVideo1End = () => {
    const img = new window.Image();
    img.src = "/chambre-1980-bureau.png";
    img.onload = () => {
      setDetail1Loaded(true);
      setStage("detail1");
    };
  };

  // Préchargement image de détail 2
  const handleVideo2End = () => {
    const img = new window.Image();
    img.src = "/chambre-1980-biblio.png";
    img.onload = () => {
      setDetail2Loaded(true);
      setStage("detail2");
    };
  };

  const initialInteractiveObjects = [
    {
      // Objet Réveil
      id: "init-1",
      x: "11%",
      y: "58%",
      icon: <FaPlay />,
      action: () => setStage("video-vimeo-reveil"),
      bgColor: "#5E9197",
    },
    {
      id: "init-2",
      x: "38%",
      y: "14%",
      icon: <FaInfoCircle />,
      action: () => navigate("/reveil#/14"),
      bgColor: "#A96860",
    },
    {
      // Objet Uniforme
      id: "init-3",
      x: "53%",
      y: "17%",
      icon: <FaPlay />,
      action: () => setStage("video-vimeo3"),
      bgColor: "#5E9197",
    },
    {
      id: "init-4",
      x: "89%",
      y: "52%",
      icon: <FaInfoCircle />,
      action: () => navigate("/reveil#/9"),
      bgColor: "#A96860",
    },
    // {
    //   // Objet
    //   id: "init-5",
    //   x: "78%",
    //   y: "66%",
    //   icon: <FaPlay />,
    //   action: () => setStage("video-vimeo-s6"),
    //   bgColor: "#5E9197",
    // },
  ];

  const detailInteractiveObjects = [
    {
      // Objet carnet
      id: "detail-2",
      x: "49%",
      y: "54%",
      icon: <FaPlay />,
      action: () => {
        setPreviousStage("detail1");
        setStage("video-vimeo-s6");
      },
      bgColor: "#5E9197",
    },
  ];

  const detail2InteractiveObjects = [
    {
      id: "detail2-1",
      x: "55%",
      y: "48%",
      icon: <FaInfoCircle />,
      action: () => navigate("/reveil#/3"),
      bgColor: "#A96860",
    },
    {
      id: "detail2-2",
      x: "65%",
      y: "5%",
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
        top: "48%",
        left: "45%",
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

  return (
    <>
      {/* IMAGE PRINCIPALE AVEC LES DEUX LOUPES */}
      {stage === "initial" && (
        <div
          className="scene-container"
          style={{
            background: `url(/chambre-1980.png) center/cover no-repeat`,
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
          {!video1Ready && (
            <div
              style={{
                background: `url(/chambre-1980.png) center/cover no-repeat`,
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
              inset: 0,
              objectFit: "cover",
              transform: "scale(1.1)",
              zIndex: 1000,
              background: "transparent",
            }}
          >
            <video
              src="/chambre-1-a-bureau.mp4"
              autoPlay
              onCanPlay={() => setVideo1Ready(true)}
              onEnded={handleVideo1End}
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
                background: "transparent",
                zIndex: 101,
              }}
            />
          </div>
        </>
      )}
      {stage === "detail1" && detail1Loaded && (
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
        <>
          {!video2Ready && (
            <div
              style={{
                background: `url(/chambre-1980.png) center/cover no-repeat`,
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
              inset: 0,
              objectFit: "cover",
              transform: "scale(1.1)",
              zIndex: 1000,
              background: "transparent",
            }}
          >
            <video
              src="/chambre-1-a-biblio.mp4"
              autoPlay
              onCanPlay={() => setVideo2Ready(true)}
              onEnded={handleVideo2End}
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
                background: "transparent",
                zIndex: 101,
              }}
            />
          </div>
        </>
      )}
      {stage === "detail2" && detail2Loaded && (
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

      {/* Vimeo vidéos */}
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
              src="https://player.vimeo.com/video/1095206164?h=186b21d686&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "12px",
              }}
              title="vid1"
            ></iframe>
            <motion.div
              onClick={() => navigate("/reveil")}
              style={{
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
              }}
              whileHover={{ scale: 1.1 }}
            >
              Plus de détails
            </motion.div>
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
              src="https://player.vimeo.com/video/1096389010?h=2456273caa&color=ffffff&title=0&byline=0&portrait=0"
              width="640"
              height="360"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "12px",
              }}
              title="Éducation sous pression - 2 - Uniforme"
            ></iframe>
            <motion.div
              onClick={() => navigate("/reveil#/27")}
              style={{
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
              }}
              whileHover={{ scale: 1.1 }}
            >
              Plus de détails
            </motion.div>
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
              src="https://player.vimeo.com/video/1096391336?h=9339c5c4a1&color=ffffff&title=0&byline=0&portrait=0"
              width="640"
              height="360"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "12px",
              }}
              title="Éducation sous pression - 3 - Sac"
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
              ×
            </button>
          </div>
        </div>
      )}

      {/* Vimeo vidéo spéciale pour Réveil */}
      {stage === "video-vimeo-reveil" && (
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
              src="https://player.vimeo.com/video/1096388548?h=252dc5565f&color=ffffff&title=0&byline=0&portrait=0"
              width="640"
              height="360"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "12px",
              }}
              title="vid4"
            ></iframe>
            <motion.div
              onClick={() => navigate("/reveil")}
              style={{
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
              }}
              whileHover={{ scale: 1.1 }}
            >
              Plus de détails
            </motion.div>
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
        </div>
      )}
    </>
  );
}
