import React from "react";
import "./sectionmanga.css";

export default function SectionManga() {
  return (
    <div className="manga">
      <div className="img-container">
        <img className="hero" src="./hero.png" alt="" />
        <img className="hero2" src="./cardimg.png" alt="" />
      </div>
      <span className="section-manga">
        <h3>Trigun Stampede</h3>
        <h6>Manga</h6>
        <p>
          TRIGUN is a popular action manga by Yasuhiro Nightow that follows the
          story of Vash Stampede, a legendary gunfighter and pacifist with a
          huge bounty on his head.
        </p>
      </span>
    </div>
  );
}
