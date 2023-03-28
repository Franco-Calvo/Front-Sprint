import React, { useState } from "react";
import { useRef } from "react";
import "../MangaForm/mangaform.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import alertActions from "../../Store/Alert/actions";

const { open } = alertActions;

export default function CreateManga() {
  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState(null);
  let title = useRef();
  let category = useRef();
  let description = useRef();
  let coverPhoto = useRef();
  let formulario = useRef();
  const dispatch =useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    const filteredCategory = categorias.find(
      (category) => category.name == categoria
    );
    let manga = {
      title: title.current.value,
      description: description.current.value,
      cover_photo: coverPhoto.current.value,
      category_id: filteredCategory._id,
    };
    const url = "https://minga-0gy1.onrender.com/mangas";
    let token = localStorage.getItem("token");
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    try {
      await axios.post(url, manga, headers);
      formulario.current.reset();
      dispatch(open({icon: "success",title: "Manga created successfully",type: "toast",}));
    } catch (error) {
      dispatch(open({icon: "error",title: error.response.data.message,type: "basic",}));
    }
  }

  async function renderCategory() {
    try {
      const response = await axios.get("https://minga-0gy1.onrender.com/mangas");
      setCategorias(response.data.categories);
    } catch (error) {
      dispatch(open({icon: "errot", title: error.response.data.message, type: "basic"}));
    }
  }


  return (
    <div className="contenedor2">
      <div className="formcontent">
        <section>
          <h2 className="title-new-manga">New Manga</h2>
        </section>
        <form ref={formulario} id="manga-form" onSubmit={handleSubmit}>
          <input
            className="forminput"
            type="text"
            placeholder="Insert title"
            ref={title}
          />
          <select
            className="manga-input"
            id="selectMove"
            ref={category}
            onClick={renderCategory}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value=""> Insert category</option>
            {categorias.map((categoria) => (
              <option key={categoria.name} value={categoria.name}>
                {categoria.name}
              </option>
            ))}
          </select>
          <input
            className="forminput"
            type="text"
            placeholder="Insert description"
            ref={description}
          />
          <input
            className="forminput"
            type="text"
            placeholder="Insert cover photo"
            ref={coverPhoto}
          />
          <input id="button-manga" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
