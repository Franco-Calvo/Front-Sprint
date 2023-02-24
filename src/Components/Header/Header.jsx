import React from "react";
import "./header.css";
import NavButton from "../NavButton/NavButton";

export default function header() {
  return (
    <header>
      <NavButton/>
      <img src="./logo.png" alt="" />
    </header>
  );
}
