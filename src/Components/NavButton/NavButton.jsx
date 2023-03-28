import React from "react";
import "./navbutton.css";

export default function NavButton(props) {
  return (
    <i onClick={props.onClick}>
      <img src="https://i.postimg.cc/cr3x8Xsh/menu.png" alt="" />
    </i>
  );
}
