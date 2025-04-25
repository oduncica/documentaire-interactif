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
        // textAlign: "center",
        backgroundColor: "#414B6F",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Icône Home */}
      <a
        href="/"
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
        <section
          style={{
            // padding: "60px 80px",
            // display: "flex",
            // flexDirection: "row",
            // justifyContent: "flex-start",
            // alignItems: "center",
            // gap: "60px",
            // minHeight: "100vh",
            boxSizing: "border-box",
          }}
          className="img-div"
        >
          <div>
            <img
              src="/chambre-2010.png"
              alt="Uniforme scolaire"
              style={{
                width: "468px",
                // height: "472px",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            />
            <p style={{ fontSize: "12px", marginTop: "8px", color: "white" }}>
              Rose Efron Bragelson. School girls at a picnic.
            </p>
          </div>

          <div style={{ maxWidth: "800px", textAlign: "left" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              The Uniform
            </h2>
            <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
              School uniforms in South Korea have their roots in the early 20th
              century, particularly during the Japanese occupation. Initially
              introduced as a means of instilling discipline, they quickly
              became an emblem of conformity within a deeply hierarchical
              society.
              <br />
              <br />
              After the liberation in 1945, the uniform persisted. By the 1980s,
              it became a national debate symbolizing both control and equality.
              Despite the uniformity, schools began adopting unique styles to
              differentiate themselves while still maintaining the foundational
              elements: white shirts, plaid skirts or trousers, and blazers.
              <br />
              <br />
              Over time, these uniforms became icons of youth culture in South
              Korea. Heavily featured in dramas, K-pop culture, and
              advertisements, they are now both functional attire and fashion
              statements. Modern students even accessorize them creatively to
              express individuality within conformity.
              <br />
              <br />
              Today, the uniform reflects both tradition and modernity. It
              stands at the crossroads of education, social expectations, and
              cultural identity in Korean society.
            </p>
          </div>
        </section>

        {/* Exemple d'une slide verticale liée à la précédente */}
        <section>
          <section
            style={{
              // padding: "60px 80px",
              // alignItems: "center",
              // gap: "60px",
              // minHeight: "100vh",
              boxSizing: "border-box",
            }}
          >
            <div>
              <img
                src="/chambre.png"
                alt="Peinture école coréenne"
                style={{
                  width: "468px",
                  height: "472px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                }}
              />
              <p style={{ fontSize: "12px", marginTop: "8px", color: "white" }}>
                Kim Hong-do. Painting of a village school.
              </p>
            </div>

            <div style={{ maxWidth: "800px", textAlign: "left" }}>
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
          </section>

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
