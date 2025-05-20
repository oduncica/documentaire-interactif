import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Scene1980 from "./Scene1980";
import Scene2010 from "./Scene2000";
import Scene2025 from "./Scene2025";
import LanguesDrapeau from "./LanguesDrapeau";
import ToastMessages from "./ToastMessages";

export default function SceneManager({ year, onObjectClick }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showToast, setShowToast] = useState(true); // État pour afficher les toasts

  const getSceneComponent = () => {
    switch (year) {
      case "1980":
        return <Scene1980 onObjectClick={onObjectClick} key="1980" />;
      case "2000":
        return <Scene2010 key="2000" />;
      case "2025":
        return <Scene2025 key="2025" />;
      default:
        return <div key="default">Choisis une époque</div>;
    }
  };

  const getBackgroundImage = () => {
    switch (year) {
      case "1980":
        return "/chambre-1980.png";
      case "2000":
        return "/chambre-2000.png";
      case "2025":
        return "/chambre-2025.png";
      default:
        return "";
    }
  };

  // Préchargement des images
  useEffect(() => {
    const preloadImages = () => {
      const images = [
        "/chambre-1980.png",
        "/chambre-2000.png",
        "/chambre-2025.png",
      ];
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages();
  }, []);

  // Charger l'image de fond pour l'année sélectionnée
  useEffect(() => {
    const img = new Image();
    img.src = getBackgroundImage();
    img.onload = () => setIsLoading(false);
  }, [year]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {isLoading ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#4A5B41",
            fontSize: "24px",
          }}
        >
          Chargement...
        </div>
      ) : (
        <>
          {/* ✅ Fond flouté */}
          <div
            style={{
              backgroundImage: `url(${getBackgroundImage()})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(4px)",
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          />
          {/* ✅ Scène animée */}
          <AnimatePresence mode="wait">
            <motion.div
              key={year}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                zIndex: 1,
              }}
            >
              {getSceneComponent()}
            </motion.div>
          </AnimatePresence>
        </>
      )}
      {/* ✅ Toasts */}
      {showToast && <ToastMessages onFinish={() => setShowToast(false)} />}
      {!showToast && (
        <button
          onClick={() => setShowToast(true)}
          style={{
            position: "absolute",
            bottom: 20,
            left: 20,
            backgroundColor: "#4a5b41",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: 40,
            height: 40,
            fontSize: 20,
            cursor: "pointer",
            zIndex: 999,
          }}
          title="Afficher l'introduction"
        >
          ?
        </button>
      )}

      {/* ✅ Drapeaux au-dessus de tout */}
      <LanguesDrapeau
        style={{
          zIndex: 1000, // très élevé pour ne jamais être recouvert
        }}
      />
    </div>
  );
}
