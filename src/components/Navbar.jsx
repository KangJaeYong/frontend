import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end className="nav-item">홈</NavLink>
      <NavLink to="/resume" className="nav-item">이력서</NavLink>
      <NavLink to="/intro" className="nav-item">자기소개서</NavLink>
      <NavLink to="/portfolio" className="nav-item">포트폴리오</NavLink>
    </nav>
  );
}

export default Navbar;
