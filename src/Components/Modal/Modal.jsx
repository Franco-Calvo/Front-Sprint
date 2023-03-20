import React, { useRef } from "react";
import { useSelector } from "react-redux";
import "./modal.css";
import ButtonGeneral from "../ButtonGeneral/ButtonGeneral";

export default function Modal({ setRender }) {
  const id = useSelector((store) => store.Mangaid.manga);
  const title = useRef();
  const description = useRef();
  const cover_photo = useRef();

  const close = () => {
    setRender(false);
  };

  const saveEdit = (e) => {
    e.preventDefault();

    let manga = {
      title: title.current.value,
      description: description.current.value,
      cover_photo: cover_photo.current.value,
    };

    console.log(manga);

    setRender(false);
  };

  return (
    <div className="modalContainer">
      <div className="modal">
        <span className="title">Edit your manga</span>
        <div className="container-modal">
          <label>Title</label>
          <input ref={title} type="text" placeholder={id.title} />
        </div>
        <div className="container-modal">
          <label>Description</label>
          <input
            ref={description}
            type="text"
            placeholder={id.description}
          />
        </div>
        <div className="container-modal">
          <label>Photo</label>
          <input
            ref={cover_photo}
            type="text"
            placeholder={id.cover_photo}
          />
        </div>

        <ButtonGeneral text="Save" onSubmit={saveEdit} type="submit" />
        <ButtonGeneral onClick={close} text="Cancel" />
      </div>
    </div>
  );
}
