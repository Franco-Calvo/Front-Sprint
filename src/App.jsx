import React from "react";
import "./App.css";
import NavButton from "./Components/NavButton/NavButton";

export default function App() {
  return (
    <>
      <div className="hero1">
        <header>
          <NavButton />
          <img src="./logo.png" alt="" />
        </header>

        <div className="manga">
          <div className="img-container">
            <img className="hero" src="./hero.png" alt="" />
            <img className="hero2" src="./cardimg.png" alt="" />
          </div>

          <span>
            <h3>Trigun Stampede</h3>
            <h6>Manga</h6>
            <p>
              TRIGUN is a popular action manga by Yasuhiro Nightow that follows
              the story of Vash Stampede, a legendary gunfighter and pacifist
              with a huge bounty on his head.
            </p>
          </span>
        </div>

        <div className="background-action">
          <span>
            <h1 className="title-background">Live the emotion of the manga</h1>
            <p>Find the perfect manga for you</p>
            <p>#MingaForever🔥</p>
            <button>Explore</button>
          </span>
        </div>
      </div>
    </>
  );
}
