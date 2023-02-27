import React, { useState } from "react";
import "./header.css";
import NavButton from "../NavButton/NavButton";
import NavIndex from "../NavIndex/NavIndex";

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
        <img src="./logo.png" alt="" />
      </div>
    </header>
  );
}
