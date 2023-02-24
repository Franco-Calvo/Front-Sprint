import React from "react";
import "./heromain.css";
import Header from "../Header/Header";
import SectionManga from "../SectionManga/SectionManga";
import SectionBackground from "../SectionBackground/SectionBackground";

export default function HeroMain() {
  return (
    <div className="hero1">
      <Header />
      <SectionManga />
      <SectionBackground />
    </div>
  );
}
