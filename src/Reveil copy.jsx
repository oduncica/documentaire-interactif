import React, { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import "./Reveil.css";

function Reveil() {
  const revealRef = useRef(null);

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
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Icône Home */}
      <a
        href="/chambre"
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          textDecoration: "none",
          color: "#fff",
          fontSize: "24px",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
        }}
      >
        <span style={{ marginRight: "8px", fontSize: "20px" }}>🏠</span>
        Home
      </a>

      <div className="slides">
        {/* Slide horizontale 1 */}
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
            <p style={{ fontSize: "12px", marginTop: "8px", color: "white" }}>
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
              src="/lyceennes.jpg"
              alt="Uniforme scolaire"
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            />
            <p style={{ fontSize: "12px", marginTop: "8px", color: "white" }}>
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

        {/* Slide verticale */}
        { <section>
          <section className="img-div">
            <div className="left-image">
              <img
                src="/chambre-2025.png"
                alt="Peinture école coréenne"
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                }}
              />
              <p style={{ fontSize: "12px", marginTop: "8px", color: "white" }}>
                Kim Hong-do. Painting of a village school.
              </p>
            </div>

            <div className="right-text">
              <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
                Historical Education
              </h2>
              <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
                During the Joseon Dynasty, education was reserved for the elite.
                Confucian schools formed the backbone of Korean intellectual
                life. Children learned calligraphy, Chinese classics, and
                etiquette.
                <br />
                <br />
                Kim Hong-do’s artwork is one of the earliest visual records of
                common education in Korea. It humanizes a time when education
                was a luxury for most. His style captures not only the subjects
                but the very ethos of a society undergoing cultural
                transformation.
                <br />
                <br />
                The transition from such traditional schooling to modern-day
                education — complete with uniforms and centralized curricula —
                illustrates how far Korea has come. Yet, echoes of these values
                remain embedded in the modern system.
              </p>
            </div>
          </section> }

          <section>
            <h2>Slide verticale 2</h2>
            <p>Contenu 2</p>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Reveil;
