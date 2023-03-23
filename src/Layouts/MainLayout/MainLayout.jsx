import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
<<<<<<< HEAD
import { Outlet } from "react-router-dom";
=======
import {Outlet} from "react-router-dom";
import Alert from "../../Components/Alert/Alert";
>>>>>>> 71852bb00532088ea3eaf1281bafe7660e8ac6c0

export default function () {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
<<<<<<< HEAD
=======
      <Alert/>
>>>>>>> 71852bb00532088ea3eaf1281bafe7660e8ac6c0
    </>
  );
}
