import React from "react";
import { FaBars } from "react-icons/fa";

export default function HamburgerMenu({ onClick, langue = "fr" }) {
  return (
    <div className="hamburger-menu" onClick={onClick}>
      <FaBars className="icon" size={30} color="#414B6F" />
      <div>{langue === "kr" ? "메뉴" : "MENU"}</div>
    </div>
  );
}
