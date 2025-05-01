import React from "react";
import Scene1980 from "./Scene1980";
import Scene2010 from "./Scene2010";
import Scene2025 from "./Scene2025";

export default function SceneManager({ year, onObjectClick }) {
  switch (year) {
    case "1980":
      return <Scene1980 onObjectClick={onObjectClick} />;
    case "2010":
      return <Scene2010 />;
    case "2025":
      return <Scene2025 />;
    default:
      return <div>Choisis une époque</div>;
  }
}
