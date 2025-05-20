import React, { useState } from "react";
import "./ToastMessages.css";

const messages = [
  {
    id: 1,
    title: "L'expérience interactive :",
    text: "Nous vous invitons à découvrir deux chambres de lycéens sud-coréens : l’une du passé, l’autre du présent.",
    button: "Suivant",
  },
  {
    id: 2,
    text: "Ces espaces personnels, véritables capsules temporelles, racontent bien plus qu’un parcours scolaire : ils révèlent des récits d’identité, de résistance et d’adaptation face à un système puissant.",
    button: "Commencer",
  },
  {
    id: 3,
    text: "Vous pouvez désormais librement  : Cliquer sur les objets et les découvrir, Naviguer vers la chambre du présent",
    button: "D'accord",
  },
];

export default function ToastMessages({ onFinish }) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    if (current < messages.length - 1) {
      setCurrent(current + 1);
    } else {
      onFinish(); // fin des messages
    }
  };

  const handleClose = () => {
    onFinish();
  };

  const { title, text, button } = messages[current];

  return (
    <div className="toast-message">
      <button className="toast-close" onClick={handleClose}>
        ✕
      </button>
      {title && <p className="toast-title">{title}</p>}
      <p className="toast-text">{text}</p>
      <button className="toast-button" onClick={handleNext}>
        {button}
      </button>
    </div>
  );
}
