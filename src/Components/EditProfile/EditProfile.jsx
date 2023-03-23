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
    if (dataProfile.length === id) {
      dispatch(read_author({ author_id: id }));
    }
  }, []);

  return (
    <>
      <div className='edition-Profile'>
        <form className='form-Edition'>
          <input name="name" className="author-Form-Edition" type="text" placeholder={dataProfile.name || "Name"}  />
          <input name="city_country" className="author-Form-Edition" type="text" placeholder={dataProfile.country && dataProfile.city ? `${dataProfile.country}, ${dataProfile.city}` : "City, Country"}  />
          <input name="date" className="author-Form-Edition" defaultValue={dataProfile.date} type="date"  />
          <input name="photo" className="author-Form-Edition" type="text" placeholder={dataProfile.photo || "Photo URL"}  />
          <input id='btn-save' type="submit" value="Save" />
          <input id='btn-delete' type="submit" value="Delete Account" />
        </form>
      </div>
    </>
  )
} 





