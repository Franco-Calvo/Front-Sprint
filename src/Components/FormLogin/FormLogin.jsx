import { useRef } from "react";
import "./formlogin.css";
import InputGeneral from "../InputGeneral/InputGeneral";
import ButtonGeneral from "../ButtonGeneral/ButtonGeneral";
import axios from "axios";

export default function FormRegister() {

  const email = useRef();
  const password = useRef();
  const formRef = useRef();

  return (
    <div className="container-form-general">
      <span className="title-login">
        <h3>Welcome back!</h3>
        <p>
          Discover manga, manhua and manwha, track your progress, have fun, read
          manga.
        </p>
      </span>

      <form ref={formRef}>
        <fieldset>
          <legend>Email</legend>
          <input ref={email} type="email" id="mail" name="mail" required />
          <img src="./email.png" alt="" />
        </fieldset>

        <fieldset>
          <legend>Password</legend>
          <input
            ref={password}
            type="password"
            id="password"
            name="password"
            required
          />
          <img src="./lock1.png" alt="" />
        </fieldset>

        <InputGeneral
          type="submit"
          value="Sign in"
          id="sign-up"
          style="style-1"
        />
        <ButtonGeneral
          style="style-3"
          image="./Google.png"
          text="Sign in with Google"
        />
        <span className="span-login">
          You don't have an account yet? <a href="#"> Sign up</a>
        </span>
        <span className="span-login">
          Go back to
          <a href="#"> home page</a>
        </span>
      </form>
    </div>
  );
}
