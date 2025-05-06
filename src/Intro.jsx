import React from "react";
import { useNavigate } from "react-router-dom";
import { PiDoorOpenDuotone } from "react-icons/pi";
import "./Intro.css";

function Intro() {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/chambre");
  };

  return (
    <div className="intro-container">
      <div className="intro-overlay">
        <div className="intro-content">
          <h1>Éducation sous pression</h1>
          <h2>Le documentaire interactif</h2>

          <div className="paragraphs">
            <p>
              In South Korea, the regulatory culture in high schools deeply
              shapes students’ daily lives.
            </p>
            <p>
              We invite you to step into the personal spaces of South Korean
              high schoolers across generations. A student’s room from 1980,
              from the 2000s and from 2025.
            </p>
            <p>
              These rooms act as time capsules, revealing how discipline,
              societal expectations, and daily routines have evolved... or
              stayed the same.
            </p>
            <p>
              Each space tells a story, not only about education, but also about
              identity, resistance, pressure and adaptation under a powerful
              regulatory system.
            </p>
          </div>

          <button className="enter-button" onClick={handleEnter}>
            <PiDoorOpenDuotone size={20} style={{ marginRight: "8px" }} />
            Enter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
