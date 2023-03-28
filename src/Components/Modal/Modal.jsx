import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./modal.css";
import ButtonGeneral from "../ButtonGeneral/ButtonGeneral";
import axios from "axios";
import alertActions from "../../Store/Alert/actions";
const { open } = alertActions;

export default function Modal({ setRender, setReload, reload }) {
  const id = useSelector((store) => store.Mangaid.manga);
  const title = useRef();
  const description = useRef();
  const cover_photo = useRef();
  const formRegister = useRef();
  const dispatch = useDispatch();

  const close = () => {
    setRender(false);
  };

  async function saveEdit(e) {
    e.preventDefault();

    let manga = {
      title: title.current.value || id.title,
      description: description.current.value || id.description,
      cover_photo: cover_photo.current.value || id.cover_photo,
    };

    const url = "http://localhost:8080/mangas/" + id._id;
    let token = localStorage.getItem("token");
    let headers = { headers: { Authorization: `Bearer ${token} ` } };

    try {
      await axios.put(url, manga, headers);
      let dataAlert = {
        icon: "success",
        title: "Saved!",
        type: "toast",
      };
      dispatch(open(dataAlert));
    } catch (error) {
      let dataAlert = {
        icon: "success",
        title: error.response.data.message,
        type: "toast",
      };
      dispatch(open(dataAlert));
    }
    setRender(false);
    setReload(reload);
  }

  return (
    <div className="modalContainer">
      <div className="modal">
        <form
          className="form-modal-container"
          ref={formRegister}
          onSubmit={saveEdit}
        >
          <span className="title-modal">Edit your manga</span>
          <div className="container-modal">
            <label>Title</label>
            <input
              ref={title}
              type="text"
              name="title"
              defaultValue={id.title}
              placeholder="Insert title"
            />
          </div>
          <div className="container-modal">
            <label>Description</label>
            <input
              ref={description}
              type="text"
              name="description"
              defaultValue={id.description}
              placeholder="Insert description"
            />
          </div>
          <div className="container-modal">
            <label>Photo</label>
            <input
              ref={cover_photo}
              type="url"
              name="url"
              defaultValue={id.cover_photo}
              placeholder="Insert a URL image"
            />
          </div>
          <ButtonGeneral text="Save" type="submit" value="Save" />
        </form>
        <ButtonGeneral onClick={close} text="Cancel" />
      </div>
    </div>
  );
}
