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
    else if (stage === "video1") setStage("detail1");
    else if (stage === "detail1") setStage("initial");
  };

  // Loupe 2
  const handleLoupe2Click = () => {
    if (stage === "initial") setStage("video2");
    else if (stage === "video2") setStage("detail2");
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
        setShowAllIcons(true); // Affichera les autres icônes après
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
            backgroundColor: obj.bgColor, // Prioritaire sur le CSS
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
        left: "48%",
        backgroundColor: "#698958",
        color: "white",
        borderRadius: "50%",
        padding: "12px",
        cursor: "pointer",
        zIndex: 10,
        transform: "translate(-50%, -50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      // whileHover={{ scale: 1.2 }}
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
        transform: "translate(-50%, -50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      // whileHover={{ scale: 1.2 }}
      onClick={handleLoupe2Click}
    >
      <FaSearch size={24} color="#fff" />
    </motion.div>
  );
  // const visibleInitialObjects = showAllIcons
  //   ? initialInteractiveObjects
  //   : initialInteractiveObjects.filter((obj) => obj.id === "init-1");
  return (
    <div
      className="scene-container"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      {/* IMAGE PRINCIPALE AVEC LES DEUX LOUPES */}
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
          {renderLoupe1()}
          {renderLoupe2()}
          {renderIcons(initialInteractiveObjects)}
        </div>
      )}

      {/* LOUPE 1 : vidéo puis détail */}
      {stage === "video1" && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            backgroundColor: "black",
          }}
        >
          <ReactPlayer
            url="/chambre-1-a-bureau.mp4" // Remplace par ta vidéo 1
            playing
            controls={false}
            onEnded={() => setStage("detail1")}
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              objectFit: "cover",
            }}
          />
        </div>
      )}
      {stage === "detail1" && (
        <div
          className="zoomed-image"
          style={{
            backgroundImage: "url(/chambre-1980-bureau.png)", // Remplace par ton image de détail 1
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          {renderLoupe1()}
          {renderIcons(detailInteractiveObjects)}
        </div>
      )}

      {/* LOUPE 2 : vidéo puis détail */}
      {stage === "video2" && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            backgroundColor: "black",
          }}
        >
          <ReactPlayer
            url="/chambre-1-a-biblio.mp4" // Remplace par ta vidéo 2
            playing
            controls={false}
            onEnded={() => setStage("detail2")}
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              objectFit: "cover",
            }}
          />
        </div>
      )}
      {stage === "detail2" && (
        <div
          className="zoomed-image"
          style={{
            backgroundImage: "url(/chambre-1980-biblio.png)", // Remplace par ton image de détail 2
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          {renderLoupe2()}
          {renderIcons(detail2InteractiveObjects)}
        </div>
      )}

      {/* Autres scènes déjà présentes dans ton code */}
      {stage === "video-vimeo" && (
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <iframe
            src="https://player.vimeo.com/video/1081650090?h=6557ae9d22&badge=0&autopause=0&player_id=0&app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="S9"
          ></iframe>
          <motion.div
            onClick={closeVimeoVideo}
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
          <motion.div
            onClick={() => navigate("/reveil")}
            style={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
              background: "#698958",
              color: "#fff",
              padding: "10px 16px",
              borderRadius: "8px",
              cursor: "pointer",
              zIndex: 20,
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
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <iframe
            src="https://player.vimeo.com/video/1081720802?h=a29f97c0f4&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="S3"
          ></iframe>
          <motion.div
            onClick={closeVimeoVideo}
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
        </div>
      )}

      {stage === "video-vimeo-s6" && (
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <iframe
            src="https://player.vimeo.com/video/1081719738?h=3a90542dc3&badge=0&autopause=0&player_id=0&app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            title="S6"
          ></iframe>
          <motion.div
            onClick={closeVimeoVideo}
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
        </div>
      )}
    </div>
  );
}
