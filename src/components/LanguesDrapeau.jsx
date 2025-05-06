import React from "react";

export default function LanguesDrapeau({
  selectedLang,
  setSelectedLang,
  style,
}) {
  const handleLangClick = (lang) => {
    setSelectedLang(lang);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        display: "flex",
        gap: "10px",
        cursor: "pointer",
        ...(style || {}),
      }}
    >
      <img
        src="/drapeau-coree.jpg"
        alt="Corée"
        onClick={() => handleLangClick("kr")}
        style={{
          width: "32px",
          height: "20px",
          borderRadius: "4px",
          opacity: selectedLang === "kr" ? 1 : 0.4,
          transition: "opacity 0.3s",
        }}
      />
      <img
        src="/drapeau-france.jpg"
        alt="France"
        onClick={() => handleLangClick("fr")}
        style={{
          width: "32px",
          height: "20px",
          borderRadius: "4px",
          opacity: selectedLang === "fr" ? 1 : 0.4,
          transition: "opacity 0.3s",
        }}
      />
    </div>
  );
}
