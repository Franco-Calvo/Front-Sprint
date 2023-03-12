import {useParams} from "react-router-dom";
import {useEffect, useState, useRef} from "react";
import axios from "axios";
import "./Author.css";

export default function Author() {
  const {id} = useParams();
  const [data, setData] = useState([]);
  const check = useRef();
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
  function handleChange() {
    console.log(check);
  }
  return (
    <div id="author-container">
      <section id="section-profile">
        <div>
          <img id="profile-img" src={data.photo} alt="profile" />
          <div>
            <p id="name-author">
              {data.name[0].toUpperCase() + data.name.substring(1)}
            </p>
            <p id="location-author">
              <img
                className="icon1"
                src="../location-author.png"
                alt="location"
              />{" "}
              {data.country}, {data.city}
            </p>
            <p id="date-author">
              <img className="icon1" src="../date-author.png" alt="date" />{" "}
              {data.createdAt}
            </p>
          </div>
          <img className="icon2" src="../edit-author.png" alt="edit" />
        </div>
        <p id="description-author"></p>
      </section>
      <section id="section-card">
        <div id="container-checkbox">
          <span className="text-check-author">new</span>
          <label id="switch">
            <input
              ref={check}
              id="checkbox-author"
              type="checkbox"
              onChange={handleChange}
            />
            <span id="slider">
              <div id="slider-2"></div>
            </span>
          </label>
          <span className="text-check-author">old</span>
        </div>
        <div id="container-card"></div>
      </section>
    </div>
  );
}
