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

const textes = {
  fr: {
    titre: "Crédits & Donateurs",
    intro: `Ce documentaire interactif a été réalisé dans le cadre du séjour d’étude du Master 2 CMW en Corée du Sud.`,
    credits: [
      { fr: "Education sous pression", kr: "압박받는 교육" },
      {
        fr: "Un documentaire réalisé dans le cadre du Master CMW",
        kr: "CMW 석사과정의 일환으로 제작된 다큐멘터리",
      },
      { fr: "Direction", kr: "감독", name: "Beomsu Kim 김범수" },
      {
        fr: "Image",
        kr: "촬영",
        name: "Yongju Lee 이용주, Eunsu Kim 김은수, Aline Rezende 알린 헤젠지",
      },
      { fr: "Scénario", kr: "각본", name: "Cihan Abut 지한 아부트" },
      {
        fr: "Montage",
        kr: "편집",
        name: "Anne-Laure Libon 안-로르 리봉, Chae-eun Lee 이채은",
      },
      {
        fr: "Prise de son & Perchwoman",
        kr: "음향 및 붐 오퍼레이터",
        name: "Kety Romain 케티 로맹",
      },
      {
        fr: "Design UX/UI",
        kr: "UX/UI 디자인",
        name: "Rim Ben Jaber 림 벤 자베르",
      },
      {
        fr: "Développement web",
        kr: "웹 개발",
        name: "Charlène Odunlami 샤를렌 오둔라미",
      },
      {
        fr: "Adaptation multilingue",
        kr: "다국어 번역 및 각색",
        name: "Fatemeh Sadeghmoghaddam 파테메 사데그모가담",
      },
      {
        fr: "Chef de projet",
        kr: "프로젝트 매니저",
        name: "Lou Hernandez 루 에르난데스",
      },
      {
        fr: "Recherches",
        kr: "연구",
        name: "Myriam Rharsalla 미리암 라르살라",
      },
      { fr: "Remerciements", kr: "감사의 말" },
      {
        fr: "Nous remercions chaleureusement Yeonji Kang et sa famille pour avoir accepté d’apparaître dans notre documentaire.",
        kr: "다큐멘터리에 출연해 주신 강연지 님과 그 가족께 진심으로 감사드립니다",
      },
      {
        fr: "Un grand merci également au lycée et au hagwon qui nous ont ouvert leurs portes et accepté nos demandes d’interviews.",
        kr: "인터뷰 요청을 받아들이고 저희를 환영해 주신 고등학교와 학원에도 깊이 감사드립니다",
      },
      {
        fr: "Merci à l’équipe enseignante du Master CMW - Université Gustave Eiffel",
        kr: "귀스타브 에펠 대학교 CMW 석사과정 교수진께 감사드립니다",
      },
      {
        fr: "Merci à l’équipe enseignante coréenne du département d’étude du cinéma - Dong Eui University",
        kr: "동의대학교 영화학과 한국인 교수진께 감사드립니다",
      },
      {
        fr: "Merci à tous les donateurs de la cagnotte",
        kr: "후원자(기부자) 명단",
        donateurs: [
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
        ],
      },
    ],
  },
  kr: {
    titre: "후원자 명단",
    intro: `이 인터랙티브 다큐멘터리는 프랑스 파리 8대학 CMW 석사 2기 학생들의 한국 현지 학술연수의 일환으로 제작되었습니다.
이 프로젝트의 실현을 위해 소중한 후원을 보내주신 모든 분들께 진심으로 감사드립니다!`,
    credits: [
      { fr: "Education sous pression", kr: "압박받는 교육" },
      {
        fr: "Un documentaire réalisé dans le cadre du Master CMW",
        kr: "CMW 석사과정의 일환으로 제작된 다큐멘터리",
      },
      { fr: "Direction", kr: "감독", name: "Beomsu Kim 김범수" },
      {
        fr: "Image",
        kr: "촬영",
        name: "Yongju Lee 이용주, Eunsu Kim 김은수, Aline Rezende 알린 헤젠지",
      },
      { fr: "Scénario", kr: "각본", name: "Cihan Abut 지한 아부트" },
      {
        fr: "Montage",
        kr: "편집",
        name: "Anne-Laure Libon 안-로르 리봉, Chae-eun Lee 이채은",
      },
      {
        fr: "Prise de son & Perchwoman",
        kr: "음향 및 붐 오퍼레이터",
        name: "Kety Romain 케티 로맹",
      },
      {
        fr: "Design UX/UI",
        kr: "UX/UI 디자인",
        name: "Rim Ben Jaber 림 벤 자베르",
      },
      {
        fr: "Développement web",
        kr: "웹 개발",
        name: "Charlène Odunlami 샤를렌 오둔라미",
      },
      {
        fr: "Adaptation multilingue",
        kr: "다국어 번역 및 각색",
        name: "Fatemeh Sadeghmoghaddam 파테메 사데그모가담",
      },
      {
        fr: "Chef de projet",
        kr: "프로젝트 매니저",
        name: "Lou Hernandez 루 에르난데스",
      },
      {
        fr: "Recherches",
        kr: "연구",
        name: "Myriam Rharsalla 미리암 라르살라",
      },
      { fr: "Remerciements", kr: "감사의 말" },
      {
        fr: "Nous remercions chaleureusement Yeonji Kang et sa famille pour avoir accepté d’apparaître dans notre documentaire.",
        kr: "다큐멘터리에 출연해 주신 강연지 님과 그 가족께 진심으로 감사드립니다",
      },
      {
        fr: "Un grand merci également au lycée et au hagwon qui nous ont ouvert leurs portes et accepté nos demandes d’interviews.",
        kr: "인터뷰 요청을 받아들이고 저희를 환영해 주신 고등학교와 학원에도 깊이 감사드립니다",
      },
      {
        fr: "Merci à l’équipe enseignante du Master CMW - Université Gustave Eiffel",
        kr: "귀스타브 에펠 대학교 CMW 석사과정 교수진께 감사드립니다",
      },
      {
        fr: "Merci à l’équipe enseignante coréenne du département d’étude du cinéma - Dong Eui University",
        kr: "동의대학교 영화학과 한국인 교수진께 감사드립니다",
      },
      {
        fr: "Meric à tous les donateurs de la cagnotte :",
        kr: "후원자(기부자) 명단",
        donateurs: [
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
        ],
      },
    ],
  },
};

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

export default function Remerciements() {
  const [langue, setLangue] = useState("fr");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false); // Ajout pour la modale vidéo
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
      {/* Modale vidéo documentaire complet */}
      {showVideo && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 3000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "900px",
              width: "90vw",
              height: "50vw",
              maxHeight: "506px",
              background: "#000",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 2px 16px rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                padding: "56.25% 0 0 0",
                position: "relative",
                width: "100%",
                height: "100%",
              }}
            >
              <iframe
                src="https://player.vimeo.com/video/1096384424?h=f4a5a934dc&color=ffffff&title=0&byline=0&portrait=0"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px",
                }}
                title="Éducation sous pression"
              ></iframe>
            </div>
            <button
              onClick={() => setShowVideo(false)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                backgroundColor: "#698958",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "44px",
                height: "44px",
                fontSize: "1.5rem",
                fontWeight: "bold",
                cursor: "pointer",
                zIndex: 1001,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                transition: "background 0.2s",
              }}
              aria-label="Fermer"
              title="Fermer"
            >
              <FaTimes size={22} />
            </button>
          </div>
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
              setShowVideo(true);
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
        {/* Crédits + Donateurs intégrés */}
        <div
          style={{
            background: "#f6f3f8",
            borderRadius: "10px",
            padding: "18px 18px 8px 18px",
            margin: "0 auto 28px auto",
            maxWidth: 600,
            fontSize: "1.05rem",
            color: "#4A5B41",
            textAlign: "left",
            boxShadow: "0 2px 8px #0001",
          }}
        >
          {textes[langue].credits.map((credit, idx) =>
            credit.donateurs ? (
              <div key={idx} style={{ marginBottom: 10 }}>
                <span style={{ fontWeight: 600 }}>{credit[langue]}</span>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginTop: 10,
                  }}
                >
                  <ul
                    style={{
                      flex: 1,
                      minWidth: 0,
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    {credit.donateurs
                      .filter((_, i) => i % 2 === 0)
                      .map((nom, i) => (
                        <li key={i} style={{ marginLeft: 18, marginBottom: 2 }}>
                          {nom}
                        </li>
                      ))}
                  </ul>
                  <ul
                    style={{
                      flex: 1,
                      minWidth: 0,
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    {credit.donateurs
                      .filter((_, i) => i % 2 === 1)
                      .map((nom, i) => (
                        <li key={i} style={{ marginLeft: 18, marginBottom: 2 }}>
                          {nom}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div key={idx} style={{ marginBottom: 10 }}>
                <span style={{ fontWeight: 600 }}>
                  {credit[langue]}
                  {credit.name && " : "}
                </span>
                {credit.name && (
                  <span style={{ fontWeight: 400 }}>{credit.name}</span>
                )}
              </div>
            )
          )}
        </div>
        <p style={{ marginTop: "36px", fontStyle: "italic", color: "#698958" }}>
          {textes[langue].merci}
        </p>
      </div>
    </div>
  );
}
