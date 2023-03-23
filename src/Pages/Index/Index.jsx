<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
import Auth from "../Auth/Auth";
import { useNavigate, useLocation } from "react-router-dom";
>>>>>>> 71852bb00532088ea3eaf1281bafe7660e8ac6c0
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
      {render ? (
        <Auth handleRender={handleRender} />
      ) : (
        <HeroRegister handleRender={handleRender} />
      )}
>>>>>>> 71852bb00532088ea3eaf1281bafe7660e8ac6c0
    </>
  );
}
