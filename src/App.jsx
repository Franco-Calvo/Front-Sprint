import React from "react";
import "./App.css";
import Index from "./Components/Index/Index";
import IndexLayout from "./Layouts/IndexLayout/IndexLayout";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <IndexLayout>
      <Index />
    </IndexLayout>
  );
}
