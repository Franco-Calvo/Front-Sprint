import {useParams} from "react-router-dom";
import {useEffect, useRef} from "react";
import "./Author.css";
import CardAuthor from "../../Components/CardAuthor/CardAuthor.jsx";
import {useDispatch, useSelector} from "react-redux";
import checkActions from "../../Store/CheckAuthor/actions";
import authorActions from "../../Store/Author/actions";
import mangasActions from "../../Store/MangasAuthor/actions";

const {capture} = checkActions;
const {read_author} = authorActions;
const {read_mangas} = mangasActions;

export default function Author() {
  const dispatch = useDispatch();
  const defaultCheck = useSelector((store) => store.checkboxAuthor.checked);
  const dataProfile = useSelector((store) => store.Author.author);
  const dataMangasAll = useSelector((store) => store.MangasAuthor);
  const dataMangas = defaultCheck ? dataMangasAll.new : dataMangasAll.old;
  const {id} = useParams();
  const check = useRef();

  useEffect(() => {
    if (dataProfile.length === 0) {
      dispatch(read_author({author_id: id}));
      console.log("Peticion author");
      console.log(dataProfile);
    }
  }, []);

  useEffect(() => {
    if (dataMangas.length === 0) {
      dispatch(read_mangas({author_id: id}));
      console.log("Peticion mangas");
      console.log(dataProfile);
    }
  }, []);

  function handleChange() {
    dispatch(capture({checked: check.current.checked}));
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
              defaultChecked={defaultCheck}
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
