import React from "react";
import HeroRegister from "../HeroRegister/HeroRegister";
import HeroMain from "../HeroMain/HeroMain";
import Auth from "../Auth/Auth";
import "./index.css";

export default function Index() {
  return (
    <>
      <HeroMain />
      <HeroRegister />
      <Auth />
    </>
  );
}
