import React from "react";
import "./inputgeneral.css";

export default function InputGeneral(props) {
  return (
    <>
      <input
        type={props.type}
        onClick={props.onClick}
        value={props.value}
        className={props.style}
        required={props.required}
        id={props.id}
      />
    </>
  );
}
