import React from "react";
import "./cardmanga.css";
import { Link as Anchor } from "react-router-dom";

export default function CardManga(props) {
  return (
    <div className="card-shonen">
      <span className={props?.style2}></span>
      <div className="text-manga">
        <span>
          <h4>{props.text}</h4>
          <label className={props?.style3}>{props?.category}</label>
        </span>
        <Anchor  to={"/mangas/" + props.id + "/1"}>
          Read
        </Anchor>
      </div>
      <div className="cont-manga-img">
        <img className="cont-img" src={props.img} alt="" />
      </div>
    </div>
  );
}
