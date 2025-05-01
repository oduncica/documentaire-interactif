import React from "react";
import { useNavigate } from "react-router-dom";
import "./Intro.css";

function Intro() {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/chambre"); // change le chemin selon ta route
  };

  return (
    <div className="intro-container">
      <div className="intro-overlay">
        <div className="intro-content">
          <h1>Éduquer selon les règles</h1>
          <p>
            En Corée du Sud, l’école est bien plus qu’un lieu d’apprentissage.
            Elle incarne l’ordre, la hiérarchie, l’ambition. Ce documentaire
            interactif vous plonge dans une chambre d’adolescent coréen, entre
            objets du quotidien, souvenirs scolaires et récits de vie.
          </p>
          <button className="enter-button" onClick={handleEnter}>
            Entrer dans la chambre
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
