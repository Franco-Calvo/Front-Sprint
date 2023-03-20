import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import authorActions from "../../Store/Author/actions";
import './editProfile.css'
const { read_author } = authorActions;
export default function EditProfile() {
  const dispatch = useDispatch();
  const dataProfile = useSelector((store) => store.Author.author);
  const { id } = useParams();
  
  useEffect(() => {
    if (dataProfile.length === 0) {
      dispatch(read_author({ author_id: id }));
    }
  }, []);
  const datePlaceholder = dataProfile.createdAt ? new Date(dataProfile.createdAt).toISOString().slice(0, 10).replace(/-/g, '/') : "Created At";
 // console.log(datePlaceholder)
  return (
    <>
      <div className='edition-Profile'>
        <form className='form-Edition'>
          <input name="name" className="author-Form-Edition" type="text" placeholder={dataProfile.name || "Name"} required />
          <input name="city_country" className="author-Form-Edition" type="text" placeholder={dataProfile.country && dataProfile.city ? `${dataProfile.country}, ${dataProfile.city}` : "City, Country"} required />
          <input name="date" className="author-Form-Edition" placeholder={datePlaceholder} type="text" required />
          <input name="photo" className="author-Form-Edition" type="text" placeholder={dataProfile.photo || "Photo URL"} required />
          <input id='btn-save' type="submit" value="Save" />
          <input id='btn-delete' type="submit" value="Delete Account" />
        </form>
      </div>
    </>
  )
} 

  



