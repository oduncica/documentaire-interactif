import React from "react";
import { useParams } from "react-router-dom";

const objects = [
  {
    id: 1,
    name: "Ticket de transport",
    video: "transport.mp4",
  },
  {
    id: 2,
    name: "Manuel scolaire",
    video: "hagwon.mp4",
  },
  {
    id: 3,
    name: "Sac à dos",
    video: "daily-life.mp4",
  },
];

function ObjectPage() {
  const { id } = useParams();
  const obj = objects.find((o) => o.id === parseInt(id));

  return (
    <div className="object-page">
      <h1>{obj.name}</h1>
      <video controls>
        <source src={`assets/${obj.video}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default ObjectPage;
