import {useDispatch, useSelector} from "react-redux";
import {useRef, useEffect, useState} from "react";
import authorAction from "../../Store/Author/actions.js";
import {useNavigate} from "react-router-dom";
import "./editProfile.css";
import userActions from "../../Store/CaptureUser/actions";
import alertActions from "../../Store/Alert/actions";

const {open, responseAlert} = alertActions;
const {captureUser} = userActions;
const {read_author, update_author} = authorAction;
let data;

export default function EditProfile() {
  const dispatch = useDispatch();
  const formRef = useRef();
  const [update, setUpdate] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  let authores = useSelector((store) => store.Author.author);
  const user = useSelector((store) => store.CaptureUser.user);
  const confirmEdit = useSelector((store) => store.alert.response);
  const authoresDate = authores?.date?.split("T")[0];

  if (confirmEdit === "edited") {
    completeEdit();
  } else if (confirmEdit === "deleted") {
    completeDelete();
  }

  const handleSave = async (event) => {
    event.preventDefault();
    const cityCountry = formRef.current.city_country.value;
    const array = cityCountry.split(",");
    data = {
      name: formRef.current.name.value,
      city: array[0],
      country: array[1].trim(),
      date: formRef.current.date.value,
      photo: formRef.current.photo.value,
    };
    dispatch(
      open({
        icon: "info",
        title: "Do you want to save the changes?",
        type: "confirm",
        confirmMessage: "Save",
        denyMessage: "Don't save",
        expectedResponse: "edited",
      })
    );
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    dispatch(
      open({
        icon: "info",
        title: "Are you sure you want to delete your account?",
        type: "confirm",
        confirmMessage: "Delete",
        denyMessage: "Cancel",
        expectedResponse: "deleted",
      })
    );
  };

  useEffect(() => {
    if (user.length === 0) {
      dispatch(captureUser());
    }
  }, []);

  useEffect(() => {
    if (!authores) {
      dispatch(read_author({author_id: user._id}));
    }
  }, [update, user.length === 0]);
  useEffect(() => {
    if (authores) {
      dispatch(update_author());
    }
  }, [update]);
  useEffect(() => {
    if (authores?.city && authores?.country) {
      setInputValue(`${authores?.city}, ${authores?.country}`);
    }
  }, [authores]);

  function completeEdit() {
    dispatch(update_author({data: data}));
    dispatch(responseAlert({response: ""}));
    dispatch(open({icon: "success", title: "Edited!", type: "toast"}));
  }
  function completeDelete() {
    const data = {active: false};
    dispatch(update_author({data: data}));
    setUpdate(!update);
    dispatch(responseAlert({response: ""}));
    setTimeout(() => {
      navigate("/");
    }, 500);
    dispatch(open({icon: "success", title: "Your account has been deleted", type: "toast"}));
  }
  return (
    <div className="edition-Profile">
      <form className="form-Edition" ref={formRef}>
        <input
          name="name"
          className="author-Form-Edition"
          type="text"
          placeholder="Name"
          defaultValue={authores?.name}
        />
        <input
          name="city_country"
          className="author-Form-Edition"
          type="text"
          placeholder="City, Country"
          defaultValue={inputValue}
        />
        <input
          name="date"
          className="author-Form-Edition"
          type="date"
          defaultValue={authoresDate}
        />
        <input
          name="photo"
          className="author-Form-Edition"
          type="text"
          placeholder="URL Profile Image"
          defaultValue={authores?.photo}
        />
        <input id="btn-save" type="submit" value="Save" onClick={handleSave} />
        <input
          id="btn-delete"
          type="submit"
          value="Delete Acount"
          onClick={handleDelete}
        />
      </form>
    </div>
  );
}
