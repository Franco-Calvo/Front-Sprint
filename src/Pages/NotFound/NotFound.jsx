import React from "react";
import { Link as Anchor } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h3>Lo sentimos la página no está disponible, decile al down que la creo que la arregle!</h3>
      <Anchor to="/">Registro Categoría</Anchor>
    </div>
  );
}
