import React from "react";
import { useState } from "react";
import "./cardmymangas.css";
import Modal from "../../Components/Modal/Modal";
import { Link as Anchor } from "react-router-dom";
import { useDispatch } from "react-redux";
import actionsEdit from "../../Store/MangaEdit/actions";
const { captureId } = actionsEdit;

export default function CardMyMangas({ manga, categories }) {
  const categoryUsed = categories.find((cat) => cat._id === manga.category_id);
  const [render, setRender] = useState(false);
  const dispatch = useDispatch();

  function handleEdit(e) {
    dispatch(captureId({ manga_id: e.target.id }));
    setRender(!render);
  }

  function handleDelete(e) {
    dispatch(captureId({ manga_id: e.target.id }));
  }
  return (
    <div className="card-shonen">
      <span className={categoryUsed.name}></span>
      <div className="text-manga">
        <div className="buttons-edit">
          <Anchor id="buttons-mangas">
            <img src="./Pen.png" alt="" />
          </Anchor>
          <Anchor id="buttons-mangas">
            <img src="./Add.png" alt="" />
          </Anchor>
        </div>
        <span>
          <h4>{manga.title}</h4>
          <label className={`style-${categoryUsed.name}`}>
            {categoryUsed.name}
          </label>
        </span>
        <div className="cont-buttons-mangas">
          <Anchor
            to={"#" + manga._id}
            className="button-edit"
            onClick={handleEdit}
            id={manga._id}
          >
            Edit
          </Anchor>
          {render && <Modal setRender={setRender} render={render} />}
          <Anchor
            to={"#" + manga._id}
            className="button-delete"
            id={manga._id}
            onClick={handleDelete}
          >
            Delete
          </Anchor>
        </div>
      </div>
      <div className="cont-manga-img">
        <img className="cont-img" src={manga.cover_photo} alt="" />
      </div>
    </div>
  );
}
