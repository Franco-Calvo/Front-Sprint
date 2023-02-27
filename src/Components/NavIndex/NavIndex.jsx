import React from "react";
import "./navindex.css";

export default function NavIndex({ handleRender }) {
  return (
    <nav>
      <div className="profile">
        <div className="img-text-container">
          <img src="./profileimg.png" alt="img-profile" />

          <div className="text-container">
            <h4>Lucas Ezequiel Silva</h4>
            <label>lucasezequielsilva@gmail.com</label>
          </div>

          <span onClick={handleRender}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.70708 0.292893C1.31655 -0.097631 0.683389 -0.0976311 0.292864 0.292893C-0.0976599 0.683417 -0.0976601 1.31658 0.292864 1.70711L5.58571 6.99996L0.292771 12.2929C-0.0977531 12.6834 -0.0977531 13.3166 0.292771 13.7071C0.683295 14.0976 1.31646 14.0976 1.70698 13.7071L6.99992 8.41417L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41414 6.99996L13.707 1.70711C14.0975 1.31658 14.0975 0.683419 13.707 0.292895C13.3165 -0.0976298 12.6833 -0.0976294 12.2928 0.292895L6.99992 5.58574L1.70708 0.292893Z"
                fill="white"
              />
            </svg>
          </span>
        </div>

        <div className="a-links">
          <a className="a-nav" href="#">Home</a>
          <a className="a-nav" href="#">Mangas</a>
          <a className="a-nav" href="#">My Mangas</a>
          <a className="a-nav" href="#">Favourites</a>
          <a className="a-nav" href="#">Logout</a>
        </div>
      </div>
    </nav>
  );
}
