import { useRef } from "react";
import "./formregister.css";
import InputGeneral from "../InputGeneral/InputGeneral";
import ButtonGeneral from "../ButtonGeneral/ButtonGeneral";
import axios from "axios";

export default function FormGeneral() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const confirmpassword = useRef();
  const formRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    let data = {
      [name.current.name]: name.current.value,
      [email.current.name]: email.current.value,
      [password.current.name]: password.current.value,
    };

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
      alert("Contraseñas no coinciden");
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <fieldset>
        <legend>Name</legend>
        <input ref={name} type="text" id="name" name="name" required />
        <img src="./Profile.png" alt="" />
      </fieldset>

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

      <fieldset>
        <legend>Confirm password</legend>
        <input
          ref={confirmpassword}
          type="password"
          id="confirmpassword"
          name="passwordrepeat"
          required
        />
        <img src="./lock1.png" alt="" />
      </fieldset>

      <span className="checkbox-container">
        <InputGeneral type="checkbox" style="style-checkbox" />
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
        image="./Google.png"
        text="Sign in with Google"
      />
      <span className="span-login">
        Already have an account? <a href="#"> Log in</a>
      </span>
      <span className="span-login">
        Go back to 
        <a href="#"> home page</a>
      </span>
    </form>
  );
}
