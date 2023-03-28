import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./modal.css";
import ButtonGeneral from "../ButtonGeneral/ButtonGeneral";
import axios from "axios";
import alertActions from "../../Store/Alert/actions";
const { open, responseAlert } = alertActions;

export default function Modal({ setRender, setReload, reload }) {
  const id = useSelector((store) => store.Mangaid.manga);
  const title = useRef();
  const description = useRef();
  const cover_photo = useRef();
  const formRegister = useRef();
  const dispatch = useDispatch();
  const search = useSelector((store) => store.alert.response);

  const close = () => {
    setRender(false);
  };

  if (search === "edited") {
    completeEdit();
  }

  async function completeEdit() {
    let manga = {
      title: title.current.value || id.title,
      description: description.current.value || id.description,
      cover_photo: cover_photo.current.value || id.cover_photo,
    };

    const url = "https://minga-0gy1.onrender.com/mangas/" + id._id;
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
    dispatch(responseAlert({ response: "" }));
    setRender(false);
    setReload(reload);
  }

  async function handleEdit(e) {
    e.preventDefault();

    dispatch(
      open({
        icon: "question",
        title: "Confirm to edit",
        type: "confirm",
        confirmMessage: "Edited",
        denyMessage: "Don't edit",
        expectedResponse: "edited",
      })
    );
  }

 

  return (
    <div className="modalContainer">
      <div className="modal">
        <form
          className="form-modal-container"
          ref={formRegister}
          onSubmit={handleEdit}
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
