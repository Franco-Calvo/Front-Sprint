import React, { useState } from "react";
import Auth from "../Auth/Auth";
import { useNavigate, useLocation } from "react-router-dom";
import HeroRegister from "../HeroRegister/HeroRegister";
import HeroMain from "../HeroMain/HeroMain";
import "./index.css";

export default function Index() {
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
    </>
  );
}
