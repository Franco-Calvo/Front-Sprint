import React from "react";
import { Link as Anchor } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      Lo sentimos no hemos encontrado la página que estas buscando! 
      <Anchor to="/">Volver al inicio</Anchor>
    </div>
  );
}
