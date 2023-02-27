import React from "react";
import "./sectionbackground.css";
import ButtonGeneral from "../ButtonGeneral/ButtonGeneral";

export default function SectionBackground() {
  return (
    <div className="background-action">
      <span className="background-span">
        <h1 className="title-background">Live the emotion of the manga</h1>
        <p>Find the perfect manga for you</p>
        <p id="MingaHash">#MingaForever🔥</p>
        <ButtonGeneral text="Explore"/>
      </span>
    </div>
  );
}
