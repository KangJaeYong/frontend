import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end>홈</NavLink>
      <NavLink to="/resume">이력서</NavLink>
      <NavLink to="/intro">자기소개서</NavLink>
      <NavLink to="/portfolio">포트폴리오</NavLink>
    </nav>
  );
}

export default Navbar;
