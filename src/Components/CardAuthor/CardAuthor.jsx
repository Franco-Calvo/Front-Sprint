import React from "react";
import {Link as Anchor} from "react-router-dom";
import "./CardAuthor.css";

export default function img({data}) {
  return (
    <Anchor to={"/details/" + data._id}>
      <img src={data.cover_photo} alt={data.title} />
      <p>{data.title}</p>
    </Anchor>
  );
}
