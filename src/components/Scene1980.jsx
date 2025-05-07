import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEye, FaPlay, FaInfoCircle, FaTimes } from "react-icons/fa";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

export default function Scene1980({ onObjectClick }) {
  const [stage, setStage] = useState("initial"); // 'initial' | 'video-vimeo' | 'video-vimeo3' | 'video' | 'detail'

  const handleEyeClick = () => {
    if (stage === "initial") {
      setStage("video"); // De l'image initiale à la vidéo
    } else if (stage === "video") {
      setStage("detail"); // De la vidéo à l'image zoomée
    } else if (stage === "detail") {
      setStage("initial"); // Retour à l'image de départ
    }
  };

  const closeVimeoVideo = () => {
    setStage("initial");
  };

  const initialInteractiveObjects = [
    {
      id: "init-1",
      x: "15%",
      y: "61%",
      icon: <FaPlay />,
      action: () => setStage("video-vimeo"),
    },
    {
      id: "init-2",
      x: "50%",
      y: "25%",
      icon: <FaPlay />,
      action: () => setStage("video-vimeo3"),
    },
    {
      id: "init-3",
      x: "44%",
      y: "19%",
      icon: <FaInfoCircle />,
      action: () => alert("Objet interactif 3 : info sur un objet"),
    },
    {
      id: "init-4",
      x: "70%",
      y: "50%",
      icon: <FaInfoCircle />,
      action: () => alert("Infos sur le livre"),
    },
    {
      id: "init-5",
      x: "80%",
      y: "80%",
      icon: <FaPlay />,
      action: () => setStage("video-vimeo-s6"),
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
      action: () => setStage("video-vimeo-s6"),
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
        top: "50%",
        left: "50%",
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
  const navigate = useNavigate();

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

          {/* Bouton Fermer */}
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

          {/* ✅ Bouton More Details */}
          <motion.div
            onClick={() => navigate("/reveil")}
            style={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
              background: "#698958", // Vert personnalisé
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

      {stage === "video" && (
        <div
          style={{
            position: "absolute", // Position absolue pour couvrir tout l'écran
            top: 0,
            left: 0,
            width: "100vw", // Largeur de l'écran
            height: "100vh", // Hauteur de l'écran
            overflow: "hidden", // Évitez tout débordement
            backgroundColor: "black", // Ajout d'un fond noir pour éviter tout espace visible
          }}
        >
          <ReactPlayer
            url="/chambre-1-a-bureau.mp4"
            playing
            controls={false}
            onEnded={() => setStage("detail")}
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

          {/* Icône Play personnalisée */}
          <motion.div
            className="custom-play"
            style={{
              position: "absolute",
              top: "30%",
              left: "60%",
              zIndex: 10,
              background: "rgba(0,0,0,0.6)",
              borderRadius: "50%",
              padding: "10px",
              cursor: "pointer",
            }}
            whileHover={{ scale: 1.2 }}
            onClick={() => {
              // Ton action ici
              alert("Lecture d'une vidéo contextuelle");
              // ou setStage("video-vimeo-custom")
            }}
          >
            <FaPlay color="#fff" size={20} />
          </motion.div>

          {/* Icône Info personnalisée */}
          {/* <motion.div
            className="custom-info"
            style={{
              position: "absolute",
              top: "50%",
              left: "40%",
              zIndex: 10,
              background: "rgba(255,255,255,0.8)",
              borderRadius: "50%",
              padding: "10px",
              cursor: "pointer",
            }}
            whileHover={{ scale: 1.2 }}
            onClick={() => {
              alert("Informations sur l'objet");
            }}
          >
            <FaInfoCircle color="" size={20} />
          </motion.div> */}
        </div>
      )}
    </div>
  );
}
