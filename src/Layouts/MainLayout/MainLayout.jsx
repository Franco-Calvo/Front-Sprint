import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
<<<<<<< HEAD
=======
import Alert from "../../Components/Alert/Alert";
>>>>>>> 4eae3ba1bbb20341d4d1d07ab72b1cc23923757c

export default function () {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
<<<<<<< HEAD
=======
      <Alert />
>>>>>>> 4eae3ba1bbb20341d4d1d07ab72b1cc23923757c
    </>
  );
}
