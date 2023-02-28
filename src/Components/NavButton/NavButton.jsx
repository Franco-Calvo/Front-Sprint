import React from "react";
import "./navbutton.css";

export default function NavButton(props) {
  return (
    <i onClick={props.onClick}>
      <img src="./Menu.png" alt="" />
    </i>
  );
}
