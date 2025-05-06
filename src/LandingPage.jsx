import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LanguesDrapeau from "./components/LanguesDrapeau"; // adapte le chemin si besoin

export default function LandingPage() {
  const navigate = useNavigate();
  const [langue, setLangue] = useState("fr"); // 'fr' ou 'kr'

  const textes = {
    fr: {
      titre: "Education Under Pressure",
      paragraphe: `Derrière l’image d’excellence que projette le système éducatif
      sud-coréen se cache une mécanique strictement codifiée, héritée d’une
      culture réglementaire longtemps valorisée. Issue de décennies de
      développement intensif, cette approche structure encore fortement le
      quotidien des élèves. Mais comment cette culture réglementaire se
      manifeste-t-elle aujourd’hui, et comment est-elle vécue par les jeunes
      générations sud-coréennes ?`,
      bouton1: "Documentaire complet",
      bouton2: "Expérience Interactive",
    },
    kr: {
      titre: "한국 교육 속 규제문화",
      paragraphe: `한국 교육 시스템이 보여주는 탁월한 모습 뒤에는 오랫동안 중시되어 온 규범 중심의 문화에서 비롯된 규제문화들이 숨어 있다.
오랫동안 형성되고 지속되어온 이 문화는 오늘날까지도 학생들의 일상에 깊이 뿌리내리고 있다. 그렇다면 이러한 규제문화는 오늘날 어떻게 나타나고 있으며, 한국의 젊은 세대는 이를 어떻게 받아들이고 있을까?
`,
      bouton1: "전체 다큐멘터리 보기",
      bouton2: "인터랙티브 체험",
    },
  };

  return (
    <div
      style={{
        backgroundImage: "url('/eleves-ecole.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Drapeaux */}
      <LanguesDrapeau selectedLang={langue} setSelectedLang={setLangue} />

      {/* Contenu avec texte traduit */}
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          width: "100%",
          height: "auto",
          maxWidth: "700px",
          textAlign: "center",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h1
          style={{ color: "#ffffff", fontSize: "3rem", marginBottom: "1rem" }}
        >
          {textes[langue].titre}
        </h1>

        <p
          style={{
            color: "#ffffff",
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "1.6",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          {textes[langue].paragraphe}
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "20px",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => navigate("/film-complet")}
            style={{
              backgroundColor: "#ffffff",
              color: "#414B6F",
              border: "none",
              padding: "12px 24px",
              borderRadius: "20px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {textes[langue].bouton1}
          </button>

          <button
            onClick={() => navigate("/intro-interactif")}
            style={{
              backgroundColor: "#ffffff",
              color: "#414B6F",
              border: "none",
              padding: "12px 24px",
              borderRadius: "20px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {textes[langue].bouton2}
          </button>
        </div>
      </div>
    </div>
  );
}
