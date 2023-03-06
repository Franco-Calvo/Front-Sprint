import React from "react";
import "./heromain.css";
import SectionManga from "../../Components/SectionManga/SectionManga";
import SectionBackground from "../../Components/SectionBackground/SectionBackground";
import Header from "../../Components/Header/Header";
export default function HeroMain() {
  return (
    <div className="hero1">
      <SectionManga />
      <SectionBackground />
    </div>
  );
}
