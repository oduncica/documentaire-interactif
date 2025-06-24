import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import LanguesDrapeau from "./LanguesDrapeau";
import {
  FaTimes,
  FaHome,
  FaFilm,
  FaBook,
  FaInfoCircle,
  FaDoorOpen,
  FaListAlt,
  FaGavel,
} from "react-icons/fa";

const sidebarTexts = {
  fr: {
    home: "Accueil",
    room: "The Room",
    doc: "Visionner le documentaire",
    biblio: "Infographie",
    bibliography: "Bibliographie",
    legal: "Mentions légales",
    remerciements: "Remerciements",
  },
  kr: {
    home: "홈",
    room: "방",
    doc: "전체 다큐멘터리",
    biblio: "인포그래픽",
    bibliography: "참고문헌",
    legal: "법적 고지",
    remerciements: "후원자 명단",
  },
};

const textes = {
  fr: {
    titre: "Mentions légales",
    editeur: "Éditeur du site :",
    editeurContenu: `Université Gustave Eiffel
5 Bd Descartes, 77420 Champs-sur-Marne
01 60 95 75 00`,
    directeur: "Directeur de la publication :",
    directeurContenu: `Gilles Roussel, président de l’université
5 Bd Descartes, 77420 Champs-sur-Marne`,
    hebergeur: "Hébergeur du site :",
    hebergeurContenu: `Le site est hébergé sur une instance Plesk via Hetzner
Hetzner Online GmbH
Industriestr. 25, 91710 Gunzenhausen, Allemagne`,
    ia: "Utilisation de l’intelligence artificielle",
    iaContenu: `Une image présente sur ce site a été générée à l’aide d’une intelligence artificielle (Chat GPT).
Elle a été créée spécifiquement pour le projet et ne représente aucune personne réelle.
Cette utilisation est encadrée par les conditions d’usage de l’outil concerné et ne porte pas atteinte aux droits d’auteur ou à l’image d’autrui.`,
    donnees: "Données personnelles",
    donneesContenu: `Ce site ne collecte aucune donnée personnelle.
Aucun formulaire, cookie de suivi ou outil de mesure d’audience n’est utilisé.`,
  },
  kr: {
    titre: "법적 고지",
    editeur: "사이트 발행자:",
    editeurContenu: `귀스타브 에펠 대학교
5 Bd Descartes, 77420 Champs-sur-Marne
01 60 95 75 00`,
    directeur: "출판 책임자:",
    directeurContenu: `질 르셀, 대학교 총장
5 Bd Descartes, 77420 Champs-sur-Marne`,
    hebergeur: "사이트 호스팅:",
    hebergeurContenu: `이 사이트는 Hetzner를 통한 Plesk 인스턴스에 호스팅되어 있습니다.
Hetzner Online GmbH
Industriestr. 25, 91710 Gunzenhausen, 독일`,
    ia: "인공지능 사용",
    iaContenu: `이 사이트에 있는 이미지는 인공지능(Chat GPT)을 사용하여 생성되었습니다.
이 이미지는 프로젝트를 위해 특별히 제작되었으며 실제 인물을 나타내지 않습니다.
이 사용은 해당 도구의 이용 약관에 따라 관리되며 타인의 저작권이나 초상권을 침해하지 않습니다.`,
    donnees: "개인정보",
    donneesContenu: `이 사이트는 어떠한 개인정보도 수집하지 않습니다.
어떠한 양식, 추적 쿠키 또는 방문자 측정 도구도 사용되지 않습니다.`,
  },
};

export default function MentionsLegales() {
  const [langue, setLangue] = useState("fr");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className="app"
      style={{
        background: "#E3D8E2",
        minHeight: "100vh",
        width: "100vw",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
        boxSizing: "border-box",
        color: "#4A5B41",
      }}
    >
      {/* Drapeaux langue en haut à droite */}
      <LanguesDrapeau
        selectedLang={langue}
        setSelectedLang={setLangue}
        style={{ top: 20, right: 20, position: "absolute", zIndex: 1002 }}
      />

      {/* Menu hamburger en haut à gauche */}
      {!isSidebarOpen && (
        <div
          className="header"
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            zIndex: 1001,
          }}
        >
          <HamburgerMenu
            onClick={() => setIsSidebarOpen(true)}
            langue={langue}
          />
        </div>
      )}
      {/* Menu latéral complet */}
      <div className={`sidebar${isSidebarOpen ? " open" : ""}`}>
        <div className="sidebar-header">
          <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>
            <FaTimes size={30} color="#fff" />
          </button>
        </div>
        <ul className="sidebar-menu">
          <li
            className={isActive("/") ? "active" : ""}
            onClick={() => {
              setIsSidebarOpen(false);
              navigate("/");
            }}
          >
            <FaHome size={20} /> <span>{sidebarTexts[langue].home}</span>
          </li>
          <li
            className={isActive("/chambre") ? "active" : ""}
            onClick={() => {
              setIsSidebarOpen(false);
              navigate("/chambre");
            }}
          >
            <FaDoorOpen size={20} /> <span>{sidebarTexts[langue].room}</span>
          </li>
          <li
            onClick={() => {
              setIsSidebarOpen(false);
              navigate("/doc");
            }}
          >
            <FaFilm size={20} /> <span>{sidebarTexts[langue].doc}</span>
          </li>
          <li
            className={isActive("/reveil") ? "active" : ""}
            onClick={() => {
              setIsSidebarOpen(false);
              navigate("/reveil");
            }}
          >
            <FaBook size={20} /> <span>{sidebarTexts[langue].biblio}</span>
          </li>
          <li
            className={isActive("/bibliographie") ? "active" : ""}
            onClick={() => {
              setIsSidebarOpen(false);
              navigate("/bibliographie");
            }}
          >
            <FaListAlt size={20} />{" "}
            <span>{sidebarTexts[langue].bibliography}</span>
          </li>
          <li
            className={isActive("/mentions-legales") ? "active" : ""}
            onClick={() => {
              setIsSidebarOpen(false);
              navigate("/mentions-legales");
            }}
          >
            <FaGavel size={20} /> <span>{sidebarTexts[langue].legal}</span>
          </li>
          <li
            className={isActive("/remerciements") ? "active" : ""}
            onClick={() => {
              setIsSidebarOpen(false);
              navigate("/remerciements");
            }}
          >
            <FaInfoCircle size={20} />{" "}
            <span>{sidebarTexts[langue].remerciements}</span>
          </li>
        </ul>
      </div>
      {/* Contenu principal */}
      <div
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "700px",
          textAlign: "center",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "85px",
        }}
      >
        <h1 style={{ fontSize: "2.2rem", marginBottom: "18px" }}>
          {textes[langue].titre}
        </h1>
        <div
          style={{
            fontSize: "1.1rem",
            marginBottom: "18px",
            maxWidth: 600,
            margin: "0 auto",
            textAlign: "left",
            whiteSpace: "pre-line",
          }}
        >
          <strong>{textes[langue].editeur}</strong>
          <br />
          {textes[langue].editeurContenu}
          <br />
          <br />
          <strong>{textes[langue].directeur}</strong>
          <br />
          {textes[langue].directeurContenu}
          <br />
          <br />
          <strong>{textes[langue].hebergeur}</strong>
          <br />
          {textes[langue].hebergeurContenu}
          <br />
          <br />
          <strong>{textes[langue].ia}</strong>
          <br />
          {textes[langue].iaContenu}
          <br />
          <br />
          <strong>{textes[langue].donnees}</strong>
          <br />
          {textes[langue].donneesContenu}
        </div>
      </div>
    </div>
  );
}
