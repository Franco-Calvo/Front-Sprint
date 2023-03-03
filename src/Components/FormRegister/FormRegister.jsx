import { useRef } from "react";
import "./formregister.css";
import InputGeneral from "../InputGeneral/InputGeneral";
import ButtonGeneral from "../ButtonGeneral/ButtonGeneral";
import axios from "axios";

export default function FormRegister() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const photo = useRef();
  const formReg = useRef()

  async function handleSubmit(e) {
    e.preventDefault();

   

    let data = {
      [name.current.name]: name.current.value,
      [email.current.name]: email.current.value,
      [password.current.name]: password.current.value,
      [photo.current.name]: photo.current.value,
    };

    let url = "http://localhost:8080/auth/signup";

    try {
      await axios.post(url, data);
    } catch (error) {
      console.log(error);
      console.log("Ocurrió un error!");
    }

    formReg.current.reset()
  }

 

return (
  
  <form ref={formReg} onSubmit={handleSubmit}>
    <fieldset>
      <legend>Name</legend>
      <input ref={name} type="text" id="name" name="name" required />
      <img src="./Profile.png" alt="" />
    </fieldset>

    <fieldset>
      <legend>Email</legend>
      <input ref={email} type="email" id="email" name="email" required />
      <img src="./email.png" alt="" />
    </fieldset>

    <fieldset>
      <legend>Photo</legend>
      <input ref={photo} type="text" id="photo" name="photo" required />
      <img src="./camera.png" alt="" />
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


    <span className="checkbox-container">
      <InputGeneral type="checkbox" style="style-checkbox" />
      <p>Send notification to my email</p>
    </span>

    <InputGeneral type="submit" value="Sign up" id="sign-up" style="style-1" />
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
)};
