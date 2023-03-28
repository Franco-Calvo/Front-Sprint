
import { useRef } from "react";
import "./companieForm.css";
import axios from "axios";
import swal from "sweetalert";

export default function CompanyForm() {
  const name = useRef();
  const website = useRef();
  const urlProfile = useRef();
  const description = useRef();
  const formRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    let token = localStorage.getItem("token");
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    let url = 'http://localhost:8080/companies'
    
    let formData = new FormData(formRef.current);
  
    let data = {
      name: formData.get("name"),
      logo: formData.get("logo"),
      website: formData.get("website"),  
      description: formData.get("description"),
    }
  
    try {
      const response = await axios.post(url, data, headers);
      //const company = response.data.data;
      swal("Success!", "Company created successfully!", "success");
      formRef.current.reset();
    } catch (error) {
      swal("Error!", "An error occurred while creating the company", "error");
      console.error(error);
    }
  }
  

  return (
    <div id="container-companyform">
      <form ref={formRef} id="company-form" onSubmit={handleSubmit}>
        <h1>New Company</h1>
        <img src="./default-profile.png" alt="profile" />
        <input
          ref={name}
          name="name"
          className="inputCompanyForm"
          type="text"
          placeholder="Name"
          required
        />
        <input
          ref={website}
          name="website"
          className="inputCompanyForm"
          type="text"
          placeholder="Website"
          required
        />
        <input
          ref={urlProfile}
          name="logo"
          className="inputCompanyForm"
          type="text"
          placeholder="URL Profile Image"
          required
        />
        <input
          ref={description}
          name="description"
          className="inputCompanyForm"
          type="text"
          placeholder="description"
          required
        />
        <input id="button-company" type="submit" value="Send" />
      </form>
    </div>
  );
}
