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
    titre: "Bibliographie",
    histoire: "Histoire de l’éducation sud-coréenne",
    histoireContenu: `BAEK, Byung-yeul. History of Korea’s Education Fever on Display [en ligne]. The Korea Times, 16 décembre 2014.

CHOI, Anna. “A Brief History : Korean School Uniforms”, Mutzine.

DITTRICH, K., & NEUHAUS, D. A. “Korea’s ‘education fever’ from the late nineteenth to the early twenty-first century”. History of Education, 52(4), 539–552, 2023. https://doi.org/10.1080/0046760X.2022.2098391`,
    systeme: "Système éducatif actuel",
    systemeContenu: `DANDURAND Cassandra. L’impitoyable système éducatif de la Corée du Sud suscite à la fois admiration et compassion, École de politique appliquée, Faculté des lettres et sciences humaines, Université de Sherbrooke, 2021.

PROST, Martine. “L’éducation en Corée et son impact sur la société” [en ligne]. Coree‑Culture, 2012.`,
    pression: "Suicide/Pression sociale",
    pressionContenu: `DUTHU, Catherine, “Grève des enseignants en Corée du Sud après des suicides dans un pays malade de l'hypercompétitivité”, France Culture, 04/09/2023.

Jarvis, J.A.; Corbett, A.W.; Thorpe, J.D.; Dufur, M.J. “Too Much of a Good Thing: Social Capital and Academic Stress in South Korea”. Soc. Sci. 2020, 9, 187. https://doi.org/10.3390/socsci9110187

LEE, Yuri. “(Health) Suicide Trends and Responses in Korea”, Statistics Korea Statistic Research Institute, 2023.

“Suicide deaths in S. Korea hit 13-yr high in 2024; daily average at 39.5:data”, The Korean Herald, 26/02/2025.

“Students suicides hit record high with 214 in 2023, doubling in just 8 years”, The Korean Times, 27/09/2024.`,
    hagwon: "Hagwon",
    hagwonContenu: `DUTHU, Catherine. “Corée du Sud : les familles dépensent des montants records dans les cours privés, même chez les moins de 6 ans”, France Culture, 17/03/2025.

K.SORENSEN, Ariel. A history of shadow education in Japan and South Korea, Yamaguchi University, 2019.

“Private education spending in Korea hits fresh high in 2023”, The Korean Times, 14/03/2024.`,
  },
  kr: {
    titre: "참고문헌",
    histoire: "한국 교육의 역사",
    histoireContenu: `BAEK, Byung-yeul. 한국 교육열의 역사 전시 [온라인]. The Korea Times, 2014년 12월 16일.

CHOI, Anna. “간단한 역사 : 한국 교복”, Mutzine.

DITTRICH, K., & NEUHAUS, D. A. “19세기 후반부터 21세기 초까지의 한국의 ‘교육열’”. History of Education, 52(4), 539–552, 2023. https://doi.org/10.1080/0046760X.2022.2098391`,
    systeme: "현대 교육 시스템",
    systemeContenu: `DANDURAND Cassandra. 한국의 가혹한 교육 시스템은 감탄과 연민을 동시에 불러일으킨다, 셰르브루크 대학교, 2021.

PROST, Martine. “한국의 교육과 사회에 미치는 영향” [온라인]. Coree‑Culture, 2012.`,
    pression: "자살/사회적 압박",
    pressionContenu: `DUTHU, Catherine, “과도한 경쟁으로 인한 자살 후 한국 교사들의 파업”, France Culture, 2023년 9월 4일.

Jarvis, J.A.; Corbett, A.W.; Thorpe, J.D.; Dufur, M.J. “좋은 것의 과유불급: 한국의 사회적 자본과 학업 스트레스”. Soc. Sci. 2020, 9, 187. https://doi.org/10.3390/socsci9110187

LEE, Yuri. “(건강) 한국의 자살 동향 및 대응”, 통계청 통계연구원, 2023.

“2024년 한국 자살 사망자 13년 만에 최고치; 일일 평균 39.5명”, The Korean Herald, 2025년 2월 26일.

“2023년 학생 자살자 214명, 8년 만에 2배 증가”, The Korean Times, 2024년 9월 27일.`,
    hagwon: "학원",
    hagwonContenu: `DUTHU, Catherine. “한국: 6세 미만 아동까지 사교육비 사상 최고치”, France Culture, 2025년 3월 17일.

K.SORENSEN, Ariel. 일본과 한국의 그림자 교육의 역사, 야마구치 대학교, 2019.

“2023년 한국 사교육비 사상 최고치”, The Korean Times, 2024년 3월 14일.`,
  },
};

export default function Bibliographie() {
  const [langue, setLangue] = useState("fr");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false); // Ajout pour la modale vidéo
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Helper to auto-link URLs in content
  const autoLink = (text) =>
    text.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
      part.match(/^https?:\/\//) ? (
        <a key={i} href={part} target="_blank" rel="noopener noreferrer">
          {part}
        </a>
      ) : (
        part
      )
    );

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
            className={isActive("/reveil") ? "active" : ""}
            onClick={() => {
              setIsSidebarOpen(false);
              navigate("/reveil");
            }}
          >
            <FaBook size={20} /> <span>{sidebarTexts[langue].biblio}</span>
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

        <h2 style={{ fontSize: "1.3rem", marginTop: "32px" }}>
          {textes[langue].histoire}
        </h2>
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
          {autoLink(textes[langue].histoireContenu)}
        </div>

        <h2 style={{ fontSize: "1.3rem", marginTop: "32px" }}>
          {textes[langue].systeme}
        </h2>
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
          {autoLink(textes[langue].systemeContenu)}
        </div>

        <h2 style={{ fontSize: "1.3rem", marginTop: "32px" }}>
          {textes[langue].pression}
        </h2>
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
          {autoLink(textes[langue].pressionContenu)}
        </div>

        <h2 style={{ fontSize: "1.3rem", marginTop: "32px" }}>
          {textes[langue].hagwon}
        </h2>
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
          {autoLink(textes[langue].hagwonContenu)}
        </div>
      </div>
    </div>
  );
}
