import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

export default function Preloader({ media, children, showLoader }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let loaded = 0;
    const total = media.length;

    function checkDone() {
      loaded += 1;
      if (loaded === total) setLoading(false);
    }

    media.forEach((url) => {
      if (url.endsWith(".mp4")) {
        const video = document.createElement("video");
        video.src = url;
        video.oncanplaythrough = checkDone;
        video.onerror = checkDone;
      } else {
        const img = new window.Image();
        img.src = url;
        img.onload = checkDone;
        img.onerror = checkDone;
      }
    });
  }, [media]);

  // Affiche le spinner uniquement sur la landing page ET si loading
  if (loading && showLoader) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "#222",
          color: "#fff",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <FaSpinner
          size={48}
          style={{
            marginBottom: 20,
            animation: "spin 1s linear infinite",
          }}
        />
        <span>Chargement...</span>
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg);}
              100% { transform: rotate(360deg);}
            }
          `}
        </style>
      </div>
    );
  }

  // Sur les autres pages, affiche le contenu même si loading
  return children;
}
