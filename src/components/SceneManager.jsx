import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Scene1980 from "./Scene1980";
import Scene2010 from "./Scene2010";
import Scene2025 from "./Scene2025";
import LanguesDrapeau from "./LanguesDrapeau";

export default function SceneManager({ year, onObjectClick }) {
  const getSceneComponent = () => {
    switch (year) {
      case "1980":
        return <Scene1980 onObjectClick={onObjectClick} key="1980" />;
      case "2010":
        return <Scene2010 key="2010" />;
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
      case "2010":
        return "/chambre-2010.png";
      case "2025":
        return "/chambre-2025.png";
      default:
        return "";
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
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
      ✅ Drapeaux au-dessus de tout
      <LanguesDrapeau
        style={{
          zIndex: 1000, // très élevé pour ne jamais être recouvert
        }}
      />
    </div>
  );
}
