<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
import Auth from "../Auth/Auth";
import { useNavigate, useLocation } from "react-router-dom";
>>>>>>> 4eae3ba1bbb20341d4d1d07ab72b1cc23923757c
import HeroRegister from "../HeroRegister/HeroRegister";
import HeroMain from "../HeroMain/HeroMain";
import "./index.css";

export default function Index() {
<<<<<<< HEAD
  return (
    <>
      <HeroMain />
      <HeroRegister />
=======
  const location = useLocation();
  const navigate = useNavigate();

  const token = localStorage.getItem(`token`);
  const { pathname } = location;
  const [render, setRender] = useState(false);

  const handleRender = () => {
    if (pathname === "/") {
      setRender(!render);
    } else if (pathname === "/signup") {
      navigate("/signin");
    } else if (pathname === "/signin") {
      navigate("/signup");
    }
  };
  return (
    <>
      <HeroMain />
      {token ? (
        null
      ) : (
        render? <Auth handleRender={handleRender} />:<HeroRegister handleRender={handleRender} />
      )}
>>>>>>> 4eae3ba1bbb20341d4d1d07ab72b1cc23923757c
    </>
  );
}
