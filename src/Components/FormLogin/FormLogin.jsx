import { useRef, useState } from "react";
import "./formlogin.css";
import InputGeneral from "../InputGeneral/InputGeneral";
import ButtonGeneral from "../ButtonGeneral/ButtonGeneral";
import axios from "axios";
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

export default function FormLogin({ handleRender }) {
  const email = useRef();
  const password = useRef();
  const formRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  async function handleSubmit(e) {
    e.preventDefault();

    let token = localStorage.getItem("token");
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    let data = {
      [email.current.name]: email.current.value,
      [password.current.name]: password.current.value,
    };

    let url = "http://localhost:8080/auth/signin";

    try {
      if (email) await axios.post(url, data, headers);
      let res = await axios.post(url, data, headers);
      navigate("/signup");
      localStorage.setItem(`token`, res.data.token);
    } catch (error) {
      console.log(error);
      Swal.fire(error.response.data.message);
    }
  }

  return (
    <div className="container-form-general">
      <span className="title-login">
        <h3>Welcome back!</h3>
        <p>
          Discover manga, manhua and manwha, track your progress, have fun, read
          manga.
        </p>
      </span>

      <form ref={formRef} onSubmit={handleSubmit}>
        <fieldset>
          <legend>Email</legend>
          <input ref={email} type="email" id="email" name="email" required />
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
          id="sign-in"
          style="style-1"
        />
        <ButtonGeneral
          style="style-3"
          image="./Google.png"
          text="Sign in with Google"
        />
        <span className="span-login">
          You don't have an account yet?
          <span
            onClick={() => {
              if (pathname === "/signin") {
                navigate("/signup");
              } else {
                handleRender();
              }
            }}
          >
            Sign up
          </span>
        </span>
        <span className="span-login">
          Go back to
          <Anchor to={`/`}> home page</Anchor>
        </span>
      </form>
    </div>
  );
}
