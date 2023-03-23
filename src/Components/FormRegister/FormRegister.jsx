import { useRef } from "react";
import "./formregister.css";
import InputGeneral from "../InputGeneral/InputGeneral";
import ButtonGeneral from "../ButtonGeneral/ButtonGeneral";
import axios from "axios";
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import alertActions from "../../Store/Alert/actions";

<<<<<<< HEAD
export default function FormRegister() {
=======
const { open } = alertActions;

export default function FormRegister(props) {
>>>>>>> 71852bb00532088ea3eaf1281bafe7660e8ac6c0
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const photo = useRef();
  const formReg = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const store = useSelector((store) => store);
  let dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();

    let data = {
      [name.current.name]: name.current.value,
      [email.current.name]: email.current.value,
      [password.current.name]: password.current.value,
      [photo.current.name]: photo.current.value,
    };

<<<<<<< HEAD
    let url = "http://localhost:8080/users";
    if (password.current.value == confirmpassword.current.value) {
      try {
        await axios.post(url, data);
        formRef.current.reset();
      } catch (error) {
        console.log(error);
        console.log("Ocurrió un error!");
      }
    } else {
      confirmpassword.current.type = "text";
      confirmpassword.current.value = "Passwords do not match";
=======
    let url = "http://localhost:8080/auth/signup";

    try {
      await axios.post(url, data);
      let dataAlert = {
        icon: "success",
        title: "Session successfully",
      };
      dispatch(open(dataAlert));
      formReg.current.reset();
      navigate("/signin");
    } catch (error) {
      console.log(error);
      let dataAlert = {
        icon: "error",
        title: "",
      };
      error.response.data.message.forEach((err) => {
        dataAlert.title += err + "\n";
      });
      dispatch(open(dataAlert));
>>>>>>> 71852bb00532088ea3eaf1281bafe7660e8ac6c0
    }
  }

  return (
    <form className="form-Register"ref={formReg} onSubmit={handleSubmit}>
      <fieldset className="input-sim">
        <legend>Name</legend>
        <input ref={name} type="text" id="name" name="name" required />
        <img src="./profile.png" alt="" />
      </fieldset>

      <fieldset className="input-sim">
        <legend>Email</legend>
        <input ref={email} type="email" id="email" name="email" required />
        <img src="./email.png" alt="" />
      </fieldset>

      <fieldset className="input-sim">
        <legend>Photo</legend>
        <input ref={photo} type="text" id="photo" name="photo" required />
        <img src="./camera.png" alt="" />
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

      <span className="checkbox-container">
        <InputGeneral type="checkbox" style="style-checkbox" required />
        <p>Send notification to my email</p>
      </span>

      <InputGeneral
        type="submit"
        value="Sign up"
        id="sign-up"
        style="style-1"
      />

      <ButtonGeneral
        style="style-3"
        image="./google.png"
        text="Sign in with Google"
      />
      <span className="span-login">
        Already have an account?{" "}
        <span
          onClick={() => {
            if (pathname === "/signup") {
              navigate("/signin");
            } else {
              props.handleRender();
            }
          }}
        >
          <b className="action-render">Log in</b>
        </span>
      </span>
      <span className="span-login">
        Go back to
<<<<<<< HEAD
        <a href="#"> home page</a>
=======
        <Anchor to={`/`}> home page</Anchor>
>>>>>>> 71852bb00532088ea3eaf1281bafe7660e8ac6c0
      </span>
    </form>
  );
}