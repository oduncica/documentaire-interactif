import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import "./Reveil.css";

function Reveil() {
  const revealRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (revealRef.current) {
      const deck = new Reveal(revealRef.current, {
        controls: true,
        progress: true,
        slideNumber: true,
        hash: true,
        keyboard: true,
        touch: true,
        embedded: true, // 👈 active un mode plus adapté au scroll mobile
      });

      deck.initialize();
    }
  }, []);

  return (
    <div
      ref={revealRef}
      className="reveal"
      style={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#E3D8E2",
        color: "#4A5B41", // Couleur des textes
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Icône Home */}
      <div
        onClick={() => navigate("/chambre")} // Utilisation de navigate pour rediriger
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
          cursor: "pointer", // Ajout d'un curseur pointer pour indiquer que c'est cliquable
        }}
      >
        <span style={{ marginRight: "8px", fontSize: "20px" }}>🏠</span>
        Home
      </div>

      <div className="slides">
        {/* Slide horizontale 1 */}
        <section className="img-div">
          <div className="left-image">
            <img
              src="/examen-table.jpg"
              alt="Uniforme scolaire"
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            />
            <p style={{ fontSize: "12px", marginTop: "8px", color: "#4A5B41" }}>
              Rose Efron Bragelson. School girls at a picnic.
            </p>
          </div>

          <div className="right-text">
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              L’examen qui détermine une vie : Le Seungeung
            </h2>
            <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
              Connu sous le nom de "examen de la fin du secondaire" en Corée du
              Sud, est un événement majeur dans la vie des étudiants. Il
              représente non seulement un test de compétences académiques, mais
              aussi un rite de passage social qui détermine souvent l'avenir
              universitaire et professionnel des jeunes.
              <br />
              <br />
              L'examen intense de huit heures, qui teste diverses matières, est
              le résultat de plusieurs années de préparation rigoureuse. C'est
              un moment décisif pour les étudiants, qui se retrouvent sous une
              pression immense pour réussir.
            </p>
          </div>
        </section>
        {/* Slide horizontale 2 */}

        <section className="img-div">
          <div className="left-image">
            <img
              src="/jour-examen.png"
              alt="Uniforme scolaire"
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            />
            <p style={{ fontSize: "12px", marginTop: "8px", color: "#4A5B41" }}>
              Les élèves plus jeunes encouragent les lycéens alors qu’ils se
              rendent, ce jeudi, à l’examen d’entrée à l’université, déterminant
              pour leur avenir. Comme à l’accoutumée, la police a assuré
              l’escorte des candidats en retard. © Elise Hu/NPR{" "}
            </p>
          </div>

          <div className="right-text">
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              L’examen qui détermine une vie : Le Seungeung{" "}
            </h2>
            <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
              Le jour de l'examen, les rues sont presque désertes, car même les
              bureaux et magasins ajustent leurs horaires pour permettre à tout
              le monde de se concentrer sur cet événement. L'État déploie
              également des mesures de soutien, comme des augmentations du
              nombre de transports publics pour faciliter les déplacements des
              candidats et des policiers qui régulent la circulation pour éviter
              tout retard.
              <br />
              <br />
              L'examen Seungeung n'est pas seulement une épreuve académique, il
              incarne toute une culture où l'éducation et la réussite sont
              perçues comme des clefs essentielles pour accéder à un avenir
              meilleur.
            </p>
          </div>
        </section>

        <section className="img-div">
          <div className="left-image">
            <img
              src="/lyceennes.jpg"
              alt="Uniforme scolaire"
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            />
            <p style={{ fontSize: "12px", marginTop: "8px", color: "#4A5B41" }}>
              Lycéennes prenant la pose devant leur établissement Années 1970
              Auteur inconnu{" "}
            </p>
          </div>

          <div className="right-text">
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              L’examen qui détermine une vie : Le Seungeung{" "}
            </h2>
            <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
              L’intensité de l'examen Seungeung en Corée du Sud porte
              l’empreinte d’un passé où l'éducation a toujours été perçue comme
              le moyen ultime de réussite sociale. Depuis des siècles, la
              culture coréenne valorise le travail acharné et la discipline, des
              valeurs transmises de génération en génération. Dans un pays où
              l’histoire a souvent été marquée par des bouleversements, de la
              guerre à la division, l’éducation a été vue comme un levier pour
              garantir un avenir plus stable.
              <br />
              <br />
              Aujourd'hui, cette vision est toujours présente, car les
              étudiants, encore soumis à une pression intense pour réussir,
              héritent de l’idée que leur avenir dépend largement de leur
              performance à cet examen.
            </p>
          </div>
        </section>
        <section className="img-div">
          <div className="left-image">
            <img
              src="/cours-archives-filles.png"
              alt="Uniforme scolaire"
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            />
            <p style={{ fontSize: "12px", marginTop: "8px", color: "#4A5B41" }}>
              Williams, Hanson A., Jr. (1952), Class in session, Pepperdine
              University Special Collections and University Archives, URL
            </p>
          </div>

          <div className="right-text">
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              The uniform{" "}
            </h2>
            <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
              In South Korea, school uniforms are essential to school life,
              symbolizing discipline, equality, and unity. From elementary
              school to high school, all students wear similar uniforms: a white
              shirt, blazer, skirt for girls, and pants for boys. The goal is to
              eliminate social differences and focus attention on education
              rather than appearance. Strict rules regarding uniforms include
              details such as: Hair length: Boys must have short hair, and girls
              must have well-groomed hair that does not exceed shoulder length.
              Dyed or unnaturally colored hair is prohibited. Skirt length:
              Girls' skirts must be knee-length and cannot be shortened.
              <br />
              <br />
              Shoes and accessories: Only black shoes are allowed, and
              accessories (jewelry, bracelets) are generally prohibited. Socks
              and makeup: Socks must be plain (white or black) with no visible
              patterns, and makeup is forbidden. Failure to comply with these
              rules can lead to sanctions.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Reveil;
