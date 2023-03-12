import {useParams} from "react-router-dom";
import {useEffect, useState, useRef} from "react";
import axios from "axios";
import "./Author.css";
import CardAuthor from "../../Components/CardAuthor/CardAuthor.jsx";

export default function Author() {
  const {id} = useParams();
  const [dataProfile, setDataProfile] = useState([]);
  const [dataMangas, setDataMangas] = useState([]);
  const [reload, serReload] = useState(false);
  const check = useRef();
  useEffect(() => {
    axios.get("http://localhost:8080/authors/" + id).then((res) => {
      res.data.data.createdAt = res.data.data.createdAt
        .slice(0, 10)
        .split("-")
        .reverse()
        .join("/");
      setDataProfile(res.data.data);
    });
  }, [dataProfile.length != 0]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/mangas/authors/" + id + "?new=true")
      .then((res) => {
        console.log(res.data.data);
        setDataMangas(res.data.data);
      });
  }, [dataMangas.length != 0]);
  function handleChange() {
    console.log(check);
  }
  return (
    <div id="author-container">
      {dataProfile.length != 0 ? (
        <section id="section-profile">
          <div>
            <img id="profile-img" src={dataProfile.photo} alt="profile" />
            <div>
              <p id="name-author">
                {dataProfile.name[0].toUpperCase() +
                  dataProfile.name.substring(1)}
              </p>
              <p id="location-author">
                <img
                  className="icon1"
                  src="../location-author.png"
                  alt="location"
                />{" "}
                {dataProfile.country}, {dataProfile.city}
              </p>
              <p id="date-author">
                <img className="icon1" src="../date-author.png" alt="date" />{" "}
                {dataProfile.createdAt}
              </p>
            </div>
            <img className="icon2" src="../edit-author.png" alt="edit" />
          </div>
          <p id="description-author"></p>
        </section>
      ) : null}
      <section id="section-card">
        <div id="container-checkbox-author">
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
        <div id="container-card-author">
          {dataMangas?.map((each) => (
            <CardAuthor key={each._id} data={each} />
          ))}
        </div>
      </section>
    </div>
  );
}
