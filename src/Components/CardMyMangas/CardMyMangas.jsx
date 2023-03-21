import React from "react";
import { useState } from "react";
import "./cardmymangas.css";
import Modal from "../../Components/Modal/Modal";
import { Link as Anchor } from "react-router-dom";
import { useDispatch } from "react-redux";
import actionsEdit from "../../Store/MangaEdit/actions";
import axios from "axios";
import alertActions from "../../Store/Alert/actions";

const { captureId } = actionsEdit;
const { open } = alertActions;

export default function CardMyMangas({ manga, categories, setReload, reload }) {
  const categoryUsed = categories.find((cat) => cat._id === manga.category_id);
  const [render, setRender] = useState(false);
  const dispatch = useDispatch();

  async function handleEdit(e) {
    await dispatch(captureId({ manga_id: e.target.id }));
    setRender(!render);
  }

  async function handleDelete(e) {
    const mangaId = e.target.id;
    await dispatch(captureId({ manga_id: mangaId }));

    const url = `http://localhost:8080/mangas/${mangaId}`;
    let token = localStorage.getItem("token");
    let headers = { headers: { Authorization: `Bearer ${token} ` } };

    try {
      await axios.delete(url, headers);
      let dataAlert = {
        icon: "success",
        title: "Manga removed",
      };
      dispatch(open(dataAlert));
    } catch (error) {
      console.log(error);
    }

    setRender(false);
    setReload(!reload);
  }

  return (
    <div className="card-shonen">
      <span className={categoryUsed.name}></span>
      <div className="text-manga">
        <div className="buttons-edit">
          <Anchor to={`/edit/` + manga._id} id="buttons-mangas">
            <img src="./Pen.png" alt="" />
          </Anchor>
          <Anchor to={`/chapher-form/` + manga._id} id="buttons-mangas">
            <img src="./add.png" alt="" />
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
          {render && (
            <Modal
              key={manga._id}
              setRender={setRender}
              render={render}
              setReload={setReload}
              reload={!reload}
            />
          )}
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
