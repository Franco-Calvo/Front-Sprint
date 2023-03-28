import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="container-footer">
        <span className="background-cont"></span>
        <div className="container-suscribe">
          <h3>Suscribe</h3>
          <span className="suscribe-email">
            <input type="email" />
            <button className="button-suscribe">Suscribe now</button>
          </span>
        </div>
      </div>
      <div className="footer-menu">
        <div className="container-info">
          <span>
            <a href="">Home</a>
            <a href="">Mangas</a>
          </span>
          <img src="../logo.png" alt="" />
          <div className="social-media">
            <span className="icons-media">
              <img src="../facebook.png" alt="" />
              <img src="../twitter.png" alt="" />
              <img src="../vimeo.png" alt="" />
              <img src="../youtube.png" alt="" />
            </span>
            <button className="button-suscribe">Donate ♡</button>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
