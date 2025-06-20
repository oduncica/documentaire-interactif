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
} from "react-icons/fa";

const contributeurs = [
  "Adélaïde PETRIER",
  "Afi HOMAWOO",
  "Alexis PAVARD",
  "Alexis ZERBIB",
  "Alfred MAJURAN",
  "Alice PONCET",
  "Anne-Laure LIBON",
  "Antoine DOS SANTOS",
  "Armelle MICHAU",
  "Audrey HAROUX",
  "Avotina ANDRIANAVELOMANANA",
  "Bérangère BOISSEAU",
  "Cécile MORVAN",
  "Céline HENRARD",
  "Chantal NGUYEN",
  "Dylan BLANDEL",
  "Edson GALINA FORTES",
  "Emeline VINCENOT",
  "Eric BLANDEL",
  "Erwann GAUTHIER",
  "Fatima GHALLAB",
  "Gaëtan GERARD",
  "Geoffrey MSIKA",
  "Hafsa ALKAA",
  "Jacqueline HENRARD",
  "Jacques-François MARCHANDISE",
  "Jean TUPIN",
  "Joana DA SILVA",
  "Laëtitia G.",
  "Lara BOUGHANMI",
  "Laura FARAUT",
  "Lidia OUROUPOVA",
  "Marie-Valentine GALLON",
  "Martin LAPLAIZE",
  "Mohamed SAÏDANI",
  "Noémie CERNOCH",
  "Peter",
  "Philippe GAMBETTE",
  "Pierre BOUREAU",
  "Pierre-Adrien CARTON",
  "Richard LEGRAND",
  "Sakalaoudine MOUBINE",
  "Salomé DOS SANTOS",
  "Sandrine SOGADZI",
  "Sarah TESSIER",
  "Victor CABAL",
  "Virginie PRIMAS",
];

const textes = {
  fr: {
    titre: "Remerciements",
    intro: `Ce documentaire interactif a été réalisé dans le cadre du séjour d’étude du Master 2 CMW en Corée du Sud.
Un immense merci à toutes celles et ceux qui ont contribué à la cagnotte et permis la concrétisation de ce projet !`,
    merci: "Merci du fond du cœur 💜",
  },
  kr: {
    titre: "후원자 명단",
    intro: `이 인터랙티브 다큐멘터리는 프랑스 파리 8대학 CMW 석사 2기 학생들의 한국 현지 학술연수의 일환으로 제작되었습니다.
이 프로젝트의 실현을 위해 소중한 후원을 보내주신 모든 분들께 진심으로 감사드립니다!`,
    merci: "진심으로 감사드립니다 💜",
  },
};

const sidebarTexts = {
  fr: {
    home: "Accueil",
    room: "The Room",
    doc: "Le documentaire complet",
    biblio: "Bibliographie",
    remerciements: "Remerciements",
  },
  kr: {
    home: "홈",
    room: "방",
    doc: "전체 다큐멘터리",
    biblio: "참고문헌",
    remerciements: "후원자 명단",
  },
};

export default function Remerciements() {
  const [langue, setLangue] = useState("fr");
  const [showVideo] = useState(false);
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
          <HamburgerMenu onClick={() => setIsSidebarOpen(true)} langue={langue} />
        </div>
      )}
      {/* Menu latéral */}
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
            className={showVideo ? "active" : ""}
            onClick={() => {
              setIsSidebarOpen(false);
              window.open("https://vimeo.com/1082031152", "_blank", "noopener,noreferrer");
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
            className={isActive("/remerciements") ? "active" : ""}
            onClick={() => {
              setIsSidebarOpen(false);
              navigate("/remerciements");
            }}
          >
            <FaInfoCircle size={20} /> <span>{sidebarTexts[langue].remerciements}</span>
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
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "24px",
            maxWidth: 600,
            textAlign: "center",
            whiteSpace: "pre-line",
          }}
        >
          {textes[langue].intro}
        </p>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            fontSize: "1.1rem",
            columns: 2,
            maxWidth: 600,
          }}
        >
          {contributeurs.map((nom, idx) => (
            <li key={idx} style={{ marginBottom: "8px" }}>
              {nom}
            </li>
          ))}
        </ul>
        <p style={{ marginTop: "36px", fontStyle: "italic", color: "#698958" }}>
          {textes[langue].merci}
        </p>
      </div>
    </div>
  );
}
