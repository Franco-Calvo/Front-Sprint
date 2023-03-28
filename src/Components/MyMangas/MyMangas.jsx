import "./mymangas.css";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../Store/Text/actions";
import eventActions from "../../Store/MyMangas/actions.js";
import actionsChecks from "../../Store/Checks/actions.js";
import axios from "axios";
import CardMyMangas from "../CardMyMangas/CardMyMangas";
import { Link as Anchor } from "react-router-dom";

export default function MyMangas() {
  const { read_events } = eventActions;
  const { captureText } = actions;
  const { captureChecks } = actionsChecks;
  let categoriasCheck = [];

  const [reload, setReload] = useState(false);
  const dispatch = useDispatch();
  const text = useRef("");
  const [cate, setCate] = useState([]);
  const [pages, setPages] = useState(1);
  const defaultText = useSelector((store) => store.text.text);
  const data = useSelector((store) => store.events.events);
  const categorias = useSelector((store) => store.checks.category);

  const handleSearch = () => {
    setReload(!reload);
    dispatch(captureText({ inputText: text.current.value }));
  };

  useEffect(() => {
    axios
      .get("https://minga-0gy1.onrender.com/mangas")
      .then((response) => {
        setCate(response.data.categories);
      })
      .catch((error) => console.log(error));
  }, []);

  function checks(e) {
    cate.forEach((cate) => {
      if (cate.name === e.target.value) {
        if (categoriasCheck.includes(cate._id)) {
          categoriasCheck = categoriasCheck.filter((e) => e !== cate._id);
        } else {
          categoriasCheck.push(cate._id);
        }
        dispatch(captureChecks({ categories: categoriasCheck.join() }));
      }
    });
  }

  useEffect(() => {
    if (data) {
      dispatch(
        read_events({
          inputText: text.current.value,
          captureChecks: categorias,
          pages,
        })
      );
    }
  }, [reload, categorias, pages]);

  function handlePrevClick() {
    setPages((prevPages) => prevPages - 1);
    setReload(true);
  }
  function handleNextClick() {
    setPages((prevPages) => prevPages + 1);
    setReload(true);
  }

  return (
    <div className="container-manga">
      <div className="mymangas-background">
        <h1>Mangas</h1>
        <span className="manga-span">
          <img src="./search.png" alt="" />
          <input
            type="text"
            className="Search"
            placeholder="Find your manga here"
            ref={text}
            onChange={handleSearch}
            defaultValue={defaultText}
          />
        </span>
      </div>

      <div className="section-manga-cont">
        <div className="container-check-cards">
          <div className="center-items">
            <h3 className="explore-mangas">Explore</h3>
            <div className="img-mangas-mobile">
              <span>
                <label className="text-mobile-manga">Adventurers</label>
                <img src="./imagen 16.png" alt="" />
              </span>
              <span>
                <label className="text-mobile-manga">Nostalgic</label>
                <img src="./imagen 17.png" alt="" />
              </span>
              <span>
                <label className="text-mobile-manga">Popular</label>
                <img src="./imagen 18.png" alt="" />
              </span>
            </div>
            <div className="checkbox-container-mangas">
              <label className="category-button2">
                <input
                  type="checkbox"
                  name="category"
                  value="shonen"
                  onClick={checks}
                />
                <span className="category-label">shonen</span>
              </label>
              <label className="category-button3">
                <input
                  type="checkbox"
                  name="category"
                  value="seinen"
                  onClick={checks}
                />
                <span className="category-label">seinen</span>
              </label>
              <label className="category-button4">
                <input
                  type="checkbox"
                  name="category"
                  value="shojo"
                  onClick={checks}
                />
                <span className="category-label">shojo</span>
              </label>
              <label className="category-button5">
                <input
                  type="checkbox"
                  name="category"
                  value="comic"
                  onClick={checks}
                />
                <span className="category-label">comic</span>
              </label>
            </div>

            <div className="container-cards-mangas">
              <div className="card-shonen">
                <div className="text-manga">
                  <span>
                    <h4 className="New-manga-my">Create new manga</h4>
                  </span>
                </div>
                <div className="cont-manga-img">
                  <Anchor className="cont-img-my" to="/create-mangas">
                    <img className="cont-img-my" src="./newManga.png" alt="" />
                  </Anchor>
                </div>
              </div>

              {data?.length && cate?.length ? (
                data.map((manga, index) => (
                  <CardMyMangas
                    key={index}
                    manga={manga}
                    setReload={setReload}
                    reload={reload}
                    categories={cate}
                  />
                ))
              ) : (
                <p>No result founds</p>
              )}
            </div>
          </div>
          <div className="prev-next">
            <div className="cont-count">
              {pages < 2 ? (
                ""
              ) : (
                <button className="prev-next-anchor" onClick={handlePrevClick}>
                  Prev
                </button>
              )}
              <label className="count-pages">{pages}</label>
              {data?.length == 6 || data?.length == 10 ? (
                <button className="prev-next-anchor" onClick={handleNextClick}>
                  Next
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
