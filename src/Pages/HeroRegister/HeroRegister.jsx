import React from "react";
import FormRegister from "../../Components/FormRegister/FormRegister";
import "./heroregister.css";

export default function HeroRegister({handleRender}) {
  return (
    <>
      <div className="heroRegister">
        <div className="welcome">
          <div className="container-content">
            <h2>Welcome!</h2>
            <p>
              Discover manga, manhua and manhwa, track your progress, have fun,
              read manga.
            </p>
            <FormRegister handleRender={handleRender}/>
          </div>
        </div>

        <div className="background"></div>
      </div>
    </>
  );
}
