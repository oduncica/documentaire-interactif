import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import "./Reveil.css";
import { FaArrowLeft } from "react-icons/fa";
import LanguesDrapeau from "../src/components/LanguesDrapeau";

function Reveil() {
  const revealRef = useRef(null);
  const navigate = useNavigate();
  const [selectedLang, setSelectedLang] = useState("fr");

  useEffect(() => {
    if (revealRef.current) {
      const deck = new Reveal(revealRef.current, {
        controls: true,
        progress: true,
        slideNumber: true,
        hash: true,
        keyboard: true,
        touch: true,
        embedded: true,
      });
      deck.initialize();
    }
  }, []);

  // Traductions (exemple, à compléter)
  const t = {
    fr: {
      retour: "Retour",
      slides: [
        {
          img: "/examen-1.png",
          imgCredit: `Classe de terminale, 2020 “L’éducation en Corée du Sud” © Korea's Owls`,
          title: "L’examen qui détermine une vie : Le Seungeung",
          text: `Connu sous le nom de "examen de la fin du secondaire" en Corée du Sud, est un événement majeur dans la vie des étudiants. Il représente non seulement un test de compétences académiques, mais aussi un rite de passage social qui détermine souvent l'avenir universitaire et professionnel des jeunes.

L'examen intense de huit heures, qui teste diverses matières, est le résultat de plusieurs années de préparation rigoureuse. C'est un moment décisif pour les étudiants, qui se retrouvent sous une pression immense pour réussir.`,
        },
        {
          img: "/examen-2.png",
          imgCredit: `Les élèves plus jeunes encouragent les lycéens alors qu’ils se rendent, ce jeudi, à l’examen d’entrée à l’université, déterminant pour leur avenir. Comme à l’accoutumée, la police a assuré l’escorte des candidats en retard. © Elise Hu/NPR`,
          title: "L’examen qui détermine une vie : Le Seungeung",
          text: `Le jour de l'examen, les rues sont presque désertes, car même les bureaux et magasins ajustent leurs horaires pour permettre à tout le monde de se concentrer sur cet événement. L'État déploie également des mesures de soutien, comme des augmentations du nombre de transports publics pour faciliter les déplacements des candidats et des policiers qui régulent la circulation pour éviter tout retard.

L'examen Seungeung n'est pas seulement une épreuve académique, il incarne toute une culture où l'éducation et la réussite sont perçues comme des clefs essentielles pour accéder à un avenir meilleur.`,
        },
        {
          img: "/examen-3.png",
          imgCredit: `Des parents prient pour la réussite de leurs enfants dans un temple à Séoul. © Ed Jones/AFP/Getty Images`,
          title: "L’examen qui détermine une vie : Le Seungeung",
          text: `L’intensité de l'examen Seungeung en Corée du Sud porte l’empreinte d’un passé où l'éducation a toujours été perçue comme le moyen ultime de réussite sociale. Depuis des siècles, la culture coréenne valorise le travail acharné et la discipline, des valeurs transmises de génération en génération.

Dans un pays où l’histoire a souvent été marquée par des bouleversements, de la guerre à la division, l’éducation a été vue comme un levier pour garantir un avenir plus stable. Aujourd'hui, cette vision est toujours présente, car les étudiants, encore soumis à une pression intense pour réussir, héritent de l’idée que leur avenir dépend largement de leur performance à cet examen.`,
        },
        {
          img: "/soldats-uniformes.png",
          imgCredit: `Williams, Hanson A., Jr. (1952), Three South Korean students posant by a car, Pepperdine University Special Collections and University Archives,URL`,
          title: "The uniform",
          text: `En Corée du Sud, les uniformes scolaires sont essentiels à la vie scolaire, symbolisant la discipline, l’égalité et l’unité. De l’école primaire au lycée, tous les élèves portent des uniformes similaires : une chemise blanche, une veste, une jupe pour les filles et un pantalon pour les garçons. L’objectif est d’éliminer les différences sociales et de recentrer l’attention sur l’éducation plutôt que sur l’apparence. Des règles strictes régissent le port de l’uniforme, notamment :
- Longueur des cheveux : les garçons doivent avoir les cheveux courts, et les filles des cheveux bien coiffés ne dépassant pas les épaules. Les cheveux teints ou de couleur non naturelle sont interdits.
- Longueur de la jupe : les jupes des filles doivent arriver au niveau du genou et ne peuvent pas être raccourcies.
- Chaussures et accessoires : seules les chaussures noires sont autorisées, et les accessoires (bijoux, bracelets) sont généralement interdits.
- Chaussettes et maquillage : les chaussettes doivent être unies (blanches ou noires) sans motifs visibles, et le maquillage est interdit. Le non-respect de ces règles peut entraîner des sanctions.`,
        },
        // ... Ajoute les autres slides ici, même structure ...
      ],
    },
    kr: {
      retour: "뒤로가기",
      slides: [
        {
          img: "/examen-1.png",
          imgCredit: `고등학교 3학년, 2020년 “대한민국의 교육” © Korea's Owls`,
          title: "인생을 결정짓는 시험: 수능",
          text: `한국에서 "고등학교 졸업 시험"으로 알려진 수능은 학생들의 삶에서 매우 중요한 행사입니다. 이는 학업 능력을 평가하는 시험일 뿐만 아니라, 종종 젊은이들의 대학 및 직업 미래를 결정짓는 사회적 통과의례이기도 합니다.

여러 과목을 평가하는 8시간의 집중 시험은 수년간의 철저한 준비의 결과입니다. 학생들은 이 시험을 성공적으로 치르기 위해 엄청난 압박을 받습니다.`,
        },
        {
          img: "/examen-2.png",
          imgCredit: `어린 학생들이 대학 입시를 치르는 고등학생들을 응원하고 있습니다. 경찰은 지각한 수험생들을 위해 호송을 제공했습니다. © Elise Hu/NPR`,
          title: "인생을 결정짓는 시험: 수능",
          text: `시험 당일, 거리와 상점들은 거의 비어 있습니다. 모두가 이 중요한 행사에 집중할 수 있도록 근무 시간이 조정됩니다. 정부는 수험생들의 이동을 돕기 위해 대중교통을 증편하고, 경찰이 교통을 통제합니다.

수능은 단순한 학업 평가가 아니라, 교육과 성공이 더 나은 미래를 위한 핵심으로 여겨지는 문화를 상징합니다.`,
        },
        {
          img: "/examen-3.png",
          imgCredit: `서울의 한 사찰에서 자녀의 합격을 기원하는 부모들. © Ed Jones/AFP/Getty Images`,
          title: "인생을 결정짓는 시험: 수능",
          text: `한국의 수능 시험의 강도는 교육이 사회적 성공의 궁극적인 수단으로 여겨졌던 과거의 흔적을 담고 있습니다. 수세기 동안 한국 문화는 근면과 규율을 중시해왔으며, 이러한 가치관은 세대를 거쳐 전해져 왔습니다.

역사적으로 전쟁과 분단 등 많은 격변을 겪은 한국에서 교육은 더 안정적인 미래를 보장하는 수단으로 여겨졌습니다. 오늘날에도 학생들은 여전히 성공에 대한 강한 압박을 받으며, 그들의 미래가 이 시험의 성과에 크게 달려 있다고 믿고 있습니다.`,
        },
        {
          img: "/soldats-uniformes.png",
          imgCredit: `윌리엄스, 한슨 A., Jr. (1952), 자동차 옆에 선 세 명의 한국 학생, Pepperdine University Special Collections and University Archives,URL`,
          title: "교복",
          text: `한국에서 교복은 학교 생활의 필수 요소로, 규율, 평등, 단결을 상징합니다. 초등학교부터 고등학교까지 모든 학생들은 비슷한 교복을 입습니다: 흰 셔츠, 재킷, 여학생은 치마, 남학생은 바지. 교복의 목적은 사회적 차이를 없애고, 외모보다 교육에 집중하도록 하는 것입니다. 교복 착용에는 엄격한 규칙이 있습니다:
- 머리 길이: 남학생은 짧은 머리, 여학생은 어깨를 넘지 않는 단정한 머리여야 하며, 염색이나 비자연스러운 색은 금지됩니다.
- 치마 길이: 여학생의 치마는 무릎까지 내려와야 하며, 짧게 줄일 수 없습니다.
- 신발과 액세서리: 검은색 신발만 허용되며, 액세서리(귀걸이, 팔찌 등)는 일반적으로 금지됩니다.
- 양말과 화장: 양말은 무늬 없는 흰색 또는 검은색이어야 하며, 화장은 금지됩니다. 규칙을 어기면 제재를 받을 수 있습니다.`,
        },
        // ... Ajoute les autres slides ici, même structure ...
      ],
    },
  };

  const lang = t[selectedLang];

  return (
    <div
      ref={revealRef}
      className="reveal"
      style={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#E3D8E2",
        color: "#4A5B41",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Drapeaux en haut à droite */}
      <LanguesDrapeau
        selectedLang={selectedLang}
        setSelectedLang={setSelectedLang}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 20,
        }}
      />

      {/* Icône Home */}
      <div
        onClick={() => navigate("/chambre")}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          textDecoration: "none",
          color: "#4A5B41",
          fontSize: "24px",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <FaArrowLeft style={{ marginRight: "8px", fontSize: "20px" }} />
        <span>{lang.retour}</span>
      </div>

      <div className="slides">
        {lang.slides.map((slide, idx) => (
          <section className="img-div" key={idx}>
            <div className="left-image">
              <img
                src={slide.img}
                alt={slide.title}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                }}
              />
              <p
                style={{ fontSize: "12px", marginTop: "8px", color: "#698958" }}
              >
                {slide.imgCredit}
              </p>
            </div>
            <div className="right-text">
              <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
                {slide.title}
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.8",
                  whiteSpace: "pre-line",
                }}
              >
                {slide.text}
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Reveil;
