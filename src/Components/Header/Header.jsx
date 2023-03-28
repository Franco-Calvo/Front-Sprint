import React, { useState } from "react";
import "./header.css";
import NavButton from "../NavButton/NavButton";
import NavIndex from "../NavIndex/NavIndex";
import { useNavigate } from "react-router";

export default function Header() {
  const [render, setRender] = useState(false);
  const handleRender = () => {
    setRender(!render);
  };
  return (
    <header>
      <div className="container">
        <NavButton onClick={handleRender} />
        {render && <NavIndex handleRender={handleRender} />}
        <img id="logo-navbar" src="https://i.postimg.cc/r0py0TmR/logo.png" alt="" />
      </div>
    </header>
  );
}
