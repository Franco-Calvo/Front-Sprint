import React from "react";
import "./cardmanga.css";
import { Link as Anchor } from "react-router-dom";

export default function CardManga({ manga, categories }) {
  const categoryUsed = categories.find((cat) => cat._id === manga.category_id);
  return (
    <div className="card-shonen">
      <span className={categoryUsed.name}></span>
      <div className="text-manga">
        <span>
          <h4>{manga.title}</h4>
          <label className={`style-${categoryUsed.name}`}>{categoryUsed.name}</label>
        </span>
        <Anchor id="read-button-manga" to={"/mangas/" + manga._id + "/1"}>
          Read
        </Anchor>
      </div>
      <div className="cont-manga-img">
        <img className="cont-img" src={manga.cover_photo} alt="" />
      </div>
    </div>
  );
}
