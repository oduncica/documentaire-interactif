import React, { useEffect, useState } from "react";

export default function RotatePhone() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function checkOrientation() {
      const isMobile =
        /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
          navigator.userAgent
        );
      const isPortrait = window.matchMedia("(orientation: portrait)").matches;
      setShow(isMobile && isPortrait);
    }
    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);
    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 20000,
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.85)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="/rotate-phone.png"
        alt="Tournez votre téléphone"
        style={{ width: 180, maxWidth: "80vw" }}
      />
      <div
        style={{
          color: "#fff",
          marginTop: 24,
          fontSize: 20,
          textAlign: "center",
        }}
      >
        For the best experience on mobile devices, this website is only on
        horizontal mode{" "}
      </div>
    </div>
  );
}
