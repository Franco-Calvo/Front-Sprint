import React from "react";
import FormRegister from "../../Components/FormRegister/FormRegister";
import "./heroregister.css";

<<<<<<< HEAD
export default function HeroRegister() {
=======
export default function HeroRegister({handleRender}) {
>>>>>>> 71852bb00532088ea3eaf1281bafe7660e8ac6c0
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
<<<<<<< HEAD
            <FormRegister />
=======
            <FormRegister handleRender={handleRender}/>
>>>>>>> 71852bb00532088ea3eaf1281bafe7660e8ac6c0
          </div>
        </div>

        <div className="background"></div>
      </div>
    </>
  );
}
