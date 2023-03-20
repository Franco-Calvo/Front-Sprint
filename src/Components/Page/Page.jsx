import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./page.css";

export default function Chapters() {
  let navigate = useNavigate();
  let url = `http://localhost:8080/chapters/`;
  let { id, page } = useParams();
  let [chapter, setChapter] = useState({});
  let [next, setNext] = useState("");
  let [prev, setPrev] = useState("");
  let [index, setIndex] = useState(parseInt(page));

  let token = localStorage.getItem("token");
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  let [modal, setModal] = useState(false);
  let [idChapter, setIdchapter] = useState();
  let [allComments, setAllComments] = useState([]);

  const handleInputComments = (e) => {
    const { name, value } = e.target;
    setInputComments({ [name]: value });
  };
  let [inputComments, setInputComments] = useState({});
  console.log(inputComments.text);

  const enviarComentario = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line
      let response = await axios.post(`http://localhost:8080/comments`, inputComments, headers)
    } catch (error) {
      console.log(error);
    }
  };

  const handleModal = () => {
    setModal(!modal);
  };


  const getComments = () => {
    axios
      .get(`http://localhost:8080/comments?chapter_id=${idChapter}`, headers)
      .then((response) => {
        setAllComments(response.data.comments);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getComments();
    // eslint-disable-next-line
  }, [idChapter]);


  console.log(allComments);

  useEffect(() => {
    setIdchapter(id);
    axios.get(url + id)
      .then((response) => {
        setChapter(response.data.chapter);
        setPrev(response.data.prev);
        setNext(response.data.next);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, [idChapter]);

  let handlePrev = () => {
    setIndex(index - 1);
    navigate(`/chapters/${id}/${index - 1}`);
    // eslint-disable-next-line
    if (index <= 0 && chapter.order == 1) {
      navigate(`/mangas/${chapter.manga_id}/${1}`);
    } else if (index <= 0) {
      navigate(`/chapters/${prev}/0`);
      window.location.reload(true);
    }
  };
  let handleNext = (e) => {
    setIndex(index + 1);
    navigate(`/chapters/${id}/${index + 1}`);
    if (index >= chapter.pages.length - 1) {
      navigate(`/chapters/${next}/0`);
      window.location.reload(true);
    }
  };

  let cantidad = allComments.length

  return (
    <div className="page">
      {modal && (
        <div className="modal_comment">
          <div className="comments-contain">
            <div className="cerrar-modal" onClick={handleModal}>x</div>
            {allComments.map((comments) => {
              return (
                <div className="comment-is-property">
                  <div className="user-coment">
                    <div className="edit-delete">
                      <div className="edit-comment">
                        <p>Edit</p>
                        <img src="../../edit.png" alt="" />
                      </div>

                      <div className="delete-comment">
                        <img src="../../delete.png" alt="" />
                      </div>
                    </div>

                    <img src={comments.user_id.photo} className="img-comment" alt="" />
                  </div>

                  <div className="user-coments">
                    <p className="name-comment">{comments.user_id.name} </p>
                    <p className="comentario">{comments.text} </p>
                  </div>

                  <div className="sub_comments">
                    <div className="sub-reply">
                      <img className="subcomment" src="../../subcoment.png" alt="" />
                      <div className="reply-comment">
                        <p>Reply</p>
                        <img src="../../edit.png" alt="" />
                      </div>
                    </div>
                    <p className="time">45 mins ago </p>
                  </div>
                </div>



              );
            })}

            <form onSubmit={enviarComentario} className="form-comment">
              <fieldset className="input-comment">
                <input type="text" className="input_comments" onChange={handleInputComments} name="text" placeholder="Say something here..." />
                <button className="enviar" type="submit">
                  <img src="../../enviar.png" alt="" />
                </button>
              </fieldset>
            </form>

          </div>
        </div>
      )}

      <div className="container-page">
        <div className="prev" onClick={handlePrev}>
          <img src="../../prev.png" alt="prevarrow" />
        </div>

        <div className="img-text">
          <div className="text-capitulo">
            <h5>
              Capítulo {chapter.order} - {chapter.title} - Page {index}{" "}
            </h5>
          </div>
          <div className="capitulo-img">
            <img src={chapter.pages?.[index]} alt="comicimage" />
          </div>
        </div>

        <div className="next" onClick={handleNext}>
          <img src="../../next.png" alt="nextarrow" />
        </div>
      </div>

      <div className="coment-number">
        <div className="coment" onClick={handleModal}>
          {" "}
          <p>...</p>{" "}
        </div>
        <h6>{cantidad}</h6>

      </div>
    </div>
  );
}
