import React from "react";
import './NotFound.css'
import { Link as Anchor } from "react-router-dom";

export default function NotFound() {
  return (
    <div id="container-notfound">
      <div>
        <p id="text-404">404</p>
        <p id="page-not-found">PAGE NOT FOUND</p>
      </div>
      
      <div>
        <p>Sorry we couldn't find the page you were looking for!</p>
        <Anchor to="/">Go to Home</Anchor>
      </div>
    </div>
  );
}
