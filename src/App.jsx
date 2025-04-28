import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaFilm,
  FaBook,
  FaInfoCircle,
  FaPlay,
} from "react-icons/fa";
import "./App.css";

const objects = [
  {
    id: 1,
    name: "Ticket de transport",
    x: "5%",
    y: "10%",
    sound: "transport.mp3",
    video: "transport.mp4",
    type: "video", // Ajout du type pour afficher la bonne icône
  },
  {
    id: 2,
    name: "Manuel scolaire",
    x: "30%",
    y: "20%",
    sound: "classroom.mp3",
    video: "hagwon.mp4",
    type: "video",
  },
  {
    id: 3,
    name: "Sac à dos",
    x: "50%",
    y: "15%",
    sound: "schoolbag.mp3",
    video: "daily-life.mp4",
    type: "video",
  },
  {
    id: 4,
    name: "Ordinateur portable",
    x: "70%",
    y: "25%",
    sound: "laptop.mp3",
    video: "laptop.mp4",
    type: "info", // Imaginons ici une icône différente
  },
  {
    id: 5,
    name: "Téléphone portable",
    x: "20%",
    y: "30%",
    sound: "phone.mp3",
    video: "phone.mp4",
    type: "info",
  },
];

function App() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState("2025");

  const handleObjectClick = (obj) => {
    navigate(`/object/${obj.id}`);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  return (
    <div className="app">
      {/* Header */}
      <div className="header">
        <div className="hamburger-menu" onClick={toggleSidebar}>
          <FaBars className="icon" size={30} color="#fff" />
          <div>MENU</div>
        </div>

        <div className="year-buttons">
          {["1980", "2010", "2025"].map((year) => (
            <button
              key={year}
              className={selectedYear === year ? "active" : ""}
              onClick={() => handleYearChange(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <button className="close-btn" onClick={toggleSidebar}>
            <FaTimes size={30} color="#fff" />
          </button>
        </div>
        <ul className="sidebar-menu">
          <li>
            <FaHome size={20} /> <span>The Room</span>
          </li>
          <li>
            <FaFilm size={20} /> <span>Complete Documentary</span>
          </li>
          <li onClick={() => navigate("/reveil")}>
            <FaBook size={20} /> <span>Bibliographie</span>
          </li>
          <li>
            <FaInfoCircle size={20} /> <span>Scènes Complémentaires</span>
          </li>
          <li>
            <FaInfoCircle size={20} /> <span>Crédit</span>
          </li>
        </ul>
      </div>

      {/* Interactive Room */}
      <div className="interactive-room">
        {["1980", "2010", "2025"].map((year) => (
          <motion.div
            key={year}
            className="background-layer"
            initial={{ opacity: 0 }}
            animate={{ opacity: selectedYear === year ? 1 : 0 }}
            transition={{ duration: 1 }}
            style={{ backgroundImage: `url(/chambre-${year}.png)` }}
          />
        ))}

        {objects.map((obj) => (
          <motion.div
            key={obj.id}
            className="poi-icon" // Changement ici !
            style={{ left: obj.x, top: obj.y, position: "absolute" }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleObjectClick(obj)}
          >
            {obj.type === "info" ? <FaInfoCircle /> : <FaPlay />}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;
