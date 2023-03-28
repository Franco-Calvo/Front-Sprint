import React from "react";
import FormRegister from "../../Components/FormRegister/FormRegister";
import "./heroregister.css";

<<<<<<< HEAD
export default function HeroRegister() {
=======
export default function HeroRegister({handleRender}) {
>>>>>>> 4eae3ba1bbb20341d4d1d07ab72b1cc23923757c
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
>>>>>>> 4eae3ba1bbb20341d4d1d07ab72b1cc23923757c
          </div>
        </div>

        <div className="background"></div>
      </div>
    </>
  );
}
