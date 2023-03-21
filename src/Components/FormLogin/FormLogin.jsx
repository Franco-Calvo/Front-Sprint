import { useRef } from "react";
import "./formlogin.css";
import InputGeneral from "../InputGeneral/InputGeneral";
import ButtonGeneral from "../ButtonGeneral/ButtonGeneral";
import axios from "axios";
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import alertActions from "../../Store/Alert/actions";

const { open } = alertActions;

export default function FormLogin({ handleRender }) {
  const email = useRef();
  const password = useRef();
  const formRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const store = useSelector((store) => store);
  let dispatch = useDispatch();

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
      let dataAlert = {
        icon: "success",
        title: "Signed in successfully",
      };
      dispatch(open(dataAlert));

      navigate("/");

      formRef.current.reset();
      localStorage.setItem(`token`, res.data.token);
      localStorage.setItem(
        `user`,
        JSON.stringify({
          name: res.data.user.name,
          email: res.data.user.email,
          photo: res.data.user.photo,
          user_id: res.data.user._id
        })
      );
    } catch (error) {
      console.log(error);
      let dataAlert = {
        icon: "error",
        title: error.response.data.message,
      };
      dispatch(open(dataAlert));
    }
  }

  return (
    <div className="container-form-general">
      <h2>Welcome back!</h2>
      <p>
        Discover manga, manhua and manwha, track your progress, have fun, read
        manga.
      </p>

      <form ref={formRef} onSubmit={handleSubmit}>
        <fieldset className="input-sim">
          <legend>Email</legend>
          <input ref={email} type="email" id="email" name="email" required />
          <img src="./email.png" alt="" />
        </fieldset>

        <fieldset className="input-sim">
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
            <b className="action-render"> Sign up</b>
          </span>
        </span>
        <span className="span-login">
          Go back to
          <Anchor to="/"> home page</Anchor>
        </span>
      </form>
    </div>
  );
}
