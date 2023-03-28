import React, { useEffect } from "react";
import { useState } from "react";
import "./cardmymangas.css";
import Modal from "../../Components/Modal/Modal";
import { Link as Anchor } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actionsEdit from "../../Store/MangaEdit/actions";
import axios from "axios";
import alertActions from "../../Store/Alert/actions";

const { captureId } = actionsEdit;
const { open, responseAlert } = alertActions;
let mangaId;

export default function CardMyMangas({ manga, categories, setReload, reload }) {
  const categoryUsed = categories.find((cat) => cat._id === manga.category_id);
  const [render, setRender] = useState(false);
  const dispatch = useDispatch();
  const search = useSelector((store) => store.alert.response);

  async function handleEdit(e) {
    await dispatch(captureId({ manga_id: e.target.id }));
    setRender(!render);
  }

  async function handlePrevDelete(e) {
    mangaId = e.target.id;
    dispatch(
      open({
        icon: "question",
        title: "Confirm to delete",
        type: "confirm",
        confirmMessage: "Deleted",
        denyMessage: "Don't delete",
        expectedResponse: "deleted",
      })
    );
  }

  async function CompleteDelete() {
    const url = `http://localhost:8080/mangas/${mangaId}`;
    let token = localStorage.getItem("token");
    let headers = { headers: { Authorization: `Bearer ${token} ` } };

    try {
      await axios.delete(url, headers);
      let dataAlert = {
        icon: "success",
        title: "Manga removed",
        type: "toast"
      };
      dispatch(open(dataAlert));
      dispatch(responseAlert({ response: "" }));
    } catch (error) {
      let dataAlert = {
        icon: "error",
        title: error.response.data.message,
        type: "basic"
      };
      dispatch(open(dataAlert));
    }

    setRender(false);
    setReload(!reload);
  }

  useEffect(() => {
    if (search === "deleted") CompleteDelete();
  }, [search]);

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
            onClick={handlePrevDelete}
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
