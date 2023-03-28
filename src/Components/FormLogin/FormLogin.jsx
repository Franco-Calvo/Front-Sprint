import { useRef } from "react";
import "./formlogin.css";
import InputGeneral from "../InputGeneral/InputGeneral";
import ButtonGeneral from "../ButtonGeneral/ButtonGeneral";
import axios from "axios";
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import alertActions from "../../Store/Alert/actions";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect } from "react";
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

    let url = "https://minga-0gy1.onrender.com/auth/signin";

    try {
      if (email) await axios.post(url, data, headers);
      let res = await axios.post(url, data, headers);
      let dataAlert = {
        icon: "success",
        title: "Signed in successfully",
        type: "toast",
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
      let dataAlert = {
        icon: "error",
        title: error.response.data.message,
        type:"toast",
      };
      dispatch(open(dataAlert));
    }
  }


  const clientID = '640688783170-uo0hk0tg02o18b5g964imm39s27nksp0.apps.googleusercontent.com'

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientID,
      })
    }
    gapi.load("client:auth2", start)
  }, [])

  const onSuccess = async (response) => {
    let url = "https://minga-0gy1.onrender.com/auth/signin";
    let token = localStorage.getItem("token");
    let headers = { headers: { Authorization: `Bearer ${token}` } };

    try {
      const { name, email, imageUrl, googleId } = response.profileObj;

      const data = {

        email: email,

        password: googleId,
      };
      if (email) await axios.post(url, data, headers);
      let res = await axios.post(url, data, headers);
      let dataAlert = {
        icon: "success",
        title: "Signed in successfully",
        type:"toast",
      };
      dispatch(open(dataAlert));

      navigate("/");

      formRef.current.reset();
      localStorage.setItem(`token`, res.data.token);
      localStorage.setItem(
        `user`,
        JSON.stringify({
          name: name,
          email: email,
          photo: imageUrl,
          user_id: res.data.user._id
        })
      );
    } catch (error) {
      let dataAlert = {
        icon: "error",
        title: error.response.data.message,
        type:"basic",
      };
      dispatch(open(dataAlert));
    }
  }
  const onFailure = () => {
    let dataAlert = {
      icon: "error",
      title: "Something went wrong",
      type:"basic",
    };
    dispatch(open(dataAlert));
  }





  return (
    <div className="container-form-general">
      <h2>Welcome back!</h2>
      <p>
        Discover manga, manhua and manwha, track your progress, have fun, read
        manga.
      </p>

      <form className="form-Register" ref={formRef} onSubmit={handleSubmit}>
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

        <GoogleLogin
          className="google"
          image="./google.png"
          text="Sign in with Google"
          clientId={clientID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"sigle_host_policy"}

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
