import { useRef } from "react";
import "./AuthorForm.css";
import axios from "axios";
import swal from "sweetalert";

export default function AuthorForm() {
  const firstName = useRef();
  const lastName = useRef();
  const cityCountry = useRef();
  const date = useRef();
  const urlProfile = useRef();
  const formRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    let token = localStorage.getItem("token");
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    if (cityCountry.current.value.includes(",")) {
      let city = cityCountry.current.value.split(",")[0].trim();
      let country = cityCountry.current.value.split(",")[1].trim();
      let data = {
        [firstName.current.name]: firstName.current.value,
        [lastName.current.name]: lastName.current.value,
        ["city"]: city,
        ["country"]: country,
        [date.current.name]: date.current.value,
        [urlProfile.current.name]: urlProfile.current.value,
        ["active"]: true,
      };
      let url = "http://localhost:8080/authors";
      try {
        await axios.post(url, data, headers);
        formRef.current.reset();
        swal({
          title: "Great!",
          text: "Author created successfully.",
          icon: "success",
          button: "Accept",
          timer: "10000",
        });
      } catch (error) {
        console.log(error);
        swal({
          title: "Erro",
          text: error.response.data.message[0],
          icon: "error",
          button: "Go Back",
          timer: "10000",
        });
      }
    } else {
      swal({
        title: "Upss!",
        text: "The city and the country must be separated by a comma.",
        icon: "warning",
        button: "Go Back",
        timer: "10000",
      });
    }
  }
  return (
    <div id="container-authorform">
      <form ref={formRef} id="author-form" onSubmit={handleSubmit}>
        <h1>New Author</h1>
        <img src="./default-profile.png" alt="profile" />
        <input
          ref={firstName}
          name="name"
          className="inputAuthorForm"
          type="text"
          placeholder="First Name"
          required
        />
        <input
          ref={lastName}
          name="last_name"
          className="inputAuthorForm"
          type="text"
          placeholder="Last Name"
          required
        />
        <input
          ref={cityCountry}
          name="city_country"
          className="inputAuthorForm"
          type="text"
          placeholder="City, Country"
          required
        />
        <input
          name="date"
          ref={date}
          className="inputAuthorForm"
          type="date"
          required
        />
        <input
          ref={urlProfile}
          name="photo"
          className="inputAuthorForm"
          type="text"
          placeholder="URL Profile Image"
          required
        />
        <input id="button-author" type="submit" value="Send" />
      </form>
    </div>
  );
}
