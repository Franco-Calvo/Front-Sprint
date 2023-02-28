import React from "react";
import "./auth.css";
import FormLogin from "../FormLogin/FormLogin";

export default function Auth() {
  return (
    <div className="auth-log">
      <div className="background-login"></div>
      <FormLogin />
    </div>
  );
}
