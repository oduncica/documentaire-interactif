import React, { useState } from "react";
import "./ToastMessages.css";

const messages = {
  fr: [
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
      text: "Vous pouvez désormais librement : Cliquer sur les objets et les découvrir, Naviguer vers la chambre du présent",
      button: "D'accord",
    },
  ],
  kr: [
    {
      id: 1,
      title: "인터랙티브 체험:",
      text: "한국 고등학생의 두 방, 과거와 현재를 탐험해 보세요.",
      button: "다음",
    },
    {
      id: 2,
      text: "이 공간들은 단순한 학업의 기록이 아니라, 강력한 시스템에 맞서 정체성과 저항, 적응의 이야기를 담고 있습니다.",
      button: "시작하기",
    },
    {
      id: 3,
      text: "이제 자유롭게: 오브젝트를 클릭해 탐색하거나, 현재의 방으로 이동할 수 있습니다.",
      button: "확인",
    },
  ],
};

export default function ToastMessages({ onFinish, langue = "fr" }) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    if (current < messages[langue].length - 1) {
      setCurrent(current + 1);
    } else {
      onFinish();
    }
  };

  const handleClose = () => {
    onFinish();
  };

  const { title, text, button } = messages[langue][current];

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
