import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { PiDoorOpenDuotone } from "react-icons/pi";
import "./Intro.css";
import LanguesDrapeau from "./components/LanguesDrapeau";
import HamburgerMenu from "./components/HamburgerMenu";

function Intro() {
  const navigate = useNavigate();
  const [langue, setLangue] = useState("fr");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const textes = {
    fr: {
      titre: "Éducation sous pression",
      sousTitre: "Le documentaire interactif",
      p1: "Nous vous invitons à découvrir deux chambres de lycéens sud-coréens : l’une du passé, l’autre du présent.",
      p2: "Ces espaces personnels, véritables capsules temporelles, racontent bien plus qu’un parcours scolaire : ils révèlent des récits d’identité, de résistance, de pression et d’adaptation face à un système éducatif particulièrement strict.",
      bouton: "Entrer",
    },
    kr: {
      titre: "한국 교육 속 규제문화",
      sousTitre: "인터랙티브 다큐멘터리",
      p1: "우리는 한국 고등학생들의 일상을 여러 세대에 걸쳐 탐구해 보고자한다.",
      p2: "1980년대 고등학생의 방, 2000년대 고등학생의 방, 그리고 2025년 고등학생의 방.",
      p3: "타임머신을 타고 이 방들을 여행하는 방식은 규율, 사회적 기대와 일상이 어떻게 변화했거나 그대로 남았는지를 보여준다…",
      p4: "각 공간은 교육뿐만 아니라 개인의 정체성, 저항, 압박감, 그리고 강력한 규제 시스템에 적응하는 과정에 대한 이야기를 전한다.",
      bouton: "입장하기",
    },
  };

  const handleEnter = () => {
    navigate("/chambre");
  };

  return (
    <div className="intro-container">
      <HamburgerMenu onClick={toggleSidebar} />
      {/* Flèche "Retour à l'accueil" */}
      <div
        onClick={() => navigate("/")}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          color: "#ffffff",
          fontSize: "18px",
          textDecoration: "none",
        }}
      >
        <FaArrowLeft size={20} style={{ marginRight: "8px" }} />
        <span>Accueil</span>
      </div>

      <LanguesDrapeau selectedLang={langue} setSelectedLang={setLangue} />

      <div className="intro-overlay">
        <div className="intro-content">
          <h1>{textes[langue].titre}</h1>
          <h2>{textes[langue].sousTitre}</h2>

          <div className="paragraphs">
            <p>{textes[langue].p1}</p>
            <p>{textes[langue].p2}</p>
            <p>{textes[langue].p3}</p>
            <p>{textes[langue].p4}</p>
          </div>

          <button className="enter-button" onClick={handleEnter}>
            <PiDoorOpenDuotone size={20} style={{ marginRight: "8px" }} />
            {textes[langue].bouton}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
