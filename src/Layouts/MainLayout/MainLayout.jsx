import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

export default function (props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
