import React from "react";
import "./auth.css";
import FormLogin from "../../Components/FormLogin/FormLogin";

export default function Auth({handleRender}) {
  return (
    <div className="auth-log">
      <div className="background-login"></div>
      <FormLogin handleRender={handleRender}/>
    </div>
  );
}
