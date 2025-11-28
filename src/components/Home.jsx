import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="home-wrapper">

      <div className="home-hero">

        <div className="home-left">
          <h1 className="home-title typing">
            안녕하세요. 강재용입니다.
          </h1>
        </div>

        <div className="home-right fade-in-delay2">
          <p className="home-sub">
            컴퓨터정보공학 · 데이터 분석 · 소프트웨어 개발
          </p>
          <p className="home-desc">
            끊임없이 배우고 성장하는 개발자
          </p>

          <div className="hero-buttons">
            <Link to="/resume" className="btn-outline">이력서 보기</Link>
            <Link to="/intro" className="btn-outline">자기소개서 보기</Link>
            <Link to="/portfolio" className="btn-outline">포트폴리오 보기</Link>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;
