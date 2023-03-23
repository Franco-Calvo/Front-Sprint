import React from "react";
import {Link as Anchor} from "react-router-dom";
import "./CardAuthor.css";

export default function img({data}) {
  return (
    <Anchor className="anchor-author" to={"/mangas/" + data._id + "/1"}>
      <img
        className="author-card-img"
        src={data.cover_photo}
        alt={data.title}
      />
      <p className="author-card-title">{data.title}</p>
    </Anchor>
  );
}
