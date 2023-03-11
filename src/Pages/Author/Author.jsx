import React from "react";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import "./Author.css";

export default function Author() {
  const {id} = useParams();
  const [data, setData] = useState([]);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  useEffect(() => {
    axios.get("http://localhost:8080/authors/" + id).then((res) => {
      res.data.data.createdAt = res.data.data.createdAt
        .slice(0, 10)
        .split("-")
        .reverse()
        .join("/");
      setData(res.data.data);
    });
  }, []);

  return (
    <div id="author-container">
      <section>
        <div>
          <img src={data.photo} alt="profile" />
          <div>
            <p>{data.name}</p>
            <p>
              <img src="./location-author.png" alt="location" /> {data.country},{" "}
              {data.city}
            </p>
            <p>
              <img src="./date-author.png" alt="date" /> {data.createdAt}
            </p>
          </div>
          <img src="./edit-author.png" alt="edit" />
        </div>
        <p>Estudiante de diseño fanatico del manga, acuario, ascendente en</p>
      </section>
      <section>
        <div id="container-checkbox">
          <label htmlFor="checkbox-author">New</label>
          <input id="checkbox-author" type="checkbox" />
          <label htmlFor="checkbox-author">Old</label>
        </div>
        <div id="container-card"></div>
      </section>
    </div>
  );
}
