import React, { useState, useEffect, useRef } from "react";
import "./mangasview.css";
import CardManga from "../../Components/CardManga/CardManga";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../Store/Text/actions.js";
import eventActions from "../../Store/Events/actions.js";
const { read_events } = eventActions;
const { captureText } = actions;
export default function MangasView() {
  function returnclassName(value) {
    switch (value) {
      case "640b93d47f41e871c0ed6613":
        return "kodomo";
      case "640b93d47f41e871c0ed6615":
        return "seinen";
      case "640b93d47f41e871c0ed6612":
        return "shonen";
      case "640b93d47f41e871c0ed6614":
        return "shojo";
      default:
        return "";
    }
  }
  function returnStyle(value) {
    switch (value) {
      case "640b93d47f41e871c0ed6613":
        return "category-manga4";
      case "640b93d47f41e871c0ed6615":
        return "category-manga";
      case "640b93d47f41e871c0ed6612":
        return "category-manga2";
      case "640b93d47f41e871c0ed6614":
        return "category-manga3";
      default:
        return "";
    }
  }
  function returnCategory(value) {
    switch (value) {
      case "640b93d47f41e871c0ed6613":
        return "Kodomo";
      case "640b93d47f41e871c0ed6615":
        return "Seinen";
      case "640b93d47f41e871c0ed6612":
        return "Shonen";
      case "640b93d47f41e871c0ed6614":
        return "Shojo";
      default:
        return "";
    }
  }

  const [reload, SetReload] = useState(false);
  const dispatch = useDispatch();
  const text = useRef("");
  const defaultText = useSelector((store) => store.text.text);
  const data = useSelector((store) => store.events.events);

  useEffect(() => {
    if (data) {
      dispatch(read_events({ inputText: text.current.value }));
    }
  }, [reload]);

  const handleSearch = (event) => {
    SetReload(!reload);
    dispatch(captureText({ inputText: text.current.value }));
  };

  console.log(useSelector((store) => store.events));

  return (
    <div className="container-manga">
      <div className="mangas-background">
        <h1>Mangas</h1>
        <span className="manga-span">
          <img src="./Search.png" alt="" />
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
            <div className="checkbox-container-mangas">
              <label class="category-button">
                <input type="checkbox" name="category" value="all" />
                <span class="category-label">All</span>
              </label>
              <label class="category-button2">
                <input type="checkbox" name="category" value="all" />
                <span class="category-label">Shōnen</span>
              </label>
              <label class="category-button3">
                <input type="checkbox" name="category" value="all" />
                <span class="category-label">Seinen</span>
              </label>
              <label class="category-button4">
                <input type="checkbox" name="category" value="all" />
                <span class="category-label">Shōjo</span>
              </label>
              <label class="category-button5">
                <input type="checkbox" name="category" value="all" />
                <span class="category-label">Kodomo</span>
              </label>
            </div>

            <div className="container-cards-mangas">
              {data.length ? (
                data.map((manga, index) => (
                  <CardManga
                    key={index}
                    style3={returnStyle(manga.category_id)}
                    style2={returnclassName(manga.category_id)}
                    category={returnCategory(manga.category_id)}
                    text={manga.title}
                    img={manga.cover_photo}
                  />
                ))
              ) : (
                <p>No result founds</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
