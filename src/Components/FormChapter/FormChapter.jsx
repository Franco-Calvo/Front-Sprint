import { React, useRef } from "react";
import InputGeneral from "../InputGeneral/InputGeneral";
import "./formchapter.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import alertActions from "../../Store/Alert/actions";
import { useDispatch } from "react-redux";

const { open } = alertActions;

export default function FormChapter() {
  const { manga_id } = useParams();
  const title = useRef();
  const order = useRef();
  const pages = useRef();
  const formRef = useRef();
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    let token = localStorage.getItem("token");
    let headers = { headers: { Authorization: `Bearer ${token}` } };

    let chapter = {
      [title.current.name]: title.current.value,
      [pages.current.name]: pages.current.value,
      manga_id,
    };
    if (order.current.value) {
      chapter[order.current.name] = order.current.value;
    }

    let url = "http://localhost:8080/chapters";

    if (title.current.value.length < 4 && !pages.current.value.startsWith("")) {
      dispatch(open({
        icon: "error",
        type: "basic",
        title: "The title must be at least 4 characteres y Pages must be a valid URL.",
      }));
      return;
    } else if (
      title.current.value.length > 30 &&
      !pages.current.value.startsWith("")
    ) {
      dispatch(open({
        icon: "error",
        type: "basic",
        title: "The title must not have more than 30 characters y Pages must be a valid URL.",
      }));
      return;
    } else if (title.current.value.length < 4) {
      dispatch(open({
        icon: "error",
        title: "The title must be at least 4 characteres ",
        type: "basic",
      }));
      return;
    } else if (title.current.value.length > 30) {
      dispatch(open({
        icon: "error",
        type: "basic",
        title: "The title must not have more than 30 characters ",
      }));
      return;
    } else if (!pages.current.value.startsWith("")) {
      dispatch(open({
        icon: "error",
        type: "basic",
        title: "Pages must be a valid URL.",
      }));
      return;
    }

    try {
      let response = await axios.post(url, chapter, headers);
      dispatch(open({
        icon: "success",
        type: "toast",
        title: "Chapter created successfully",
      }));
    } catch (error) {
      dispatch(open({
        icon: "error",
        type: "basic",
        title: error.response.data.message,
      }));
    }
    formRef.current.reset();
  }

  return (
    <div className="chapter-contain">
      <form className="formchapter" ref={formRef} onSubmit={handleSubmit}>
        <input
          ref={title}
          type="text"
          id="title"
          name="title"
          required
          placeholder="insert title"
        />
        <input
          ref={order}
          type="number"
          id="order"
          name="order"
          placeholder="insert order"
        />
        <input
          ref={pages}
          type="text"
          id="pages"
          name="pages"
          required
          placeholder="insert pages"
        />

        <InputGeneral type="submit" value="send" id="sign-up" style="style-4" />
      </form>
    </div>
  );
}
