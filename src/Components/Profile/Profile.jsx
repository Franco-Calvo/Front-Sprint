import { useEffect} from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import authorActions from "../../Store/Author/actions";
import './profile.css'

const { read_author } = authorActions;

export default function Profile() {
    const dispatch = useDispatch();
    const dataProfile = useSelector((store) => store.Author.author);
    const {id} = useParams();
    useEffect(() => {
        if (dataProfile.length === 0) {
            dispatch(read_author({ author_id: id }));
        }
    }, []);
    return (
        <div className='profile-section'>
           
            <img id="profile-img" src={dataProfile.photo} alt="profile" />
            <h2>  {dataProfile.name}</h2>
            <div className="data-Profile-author">
                <p >
                    <img id="icon-date" src="../location-author.png" alt="location" />{" "}
                    {dataProfile.country}, {dataProfile.city}
                </p>
                <p >
                    <img id="icon-date" src="../date-author.png" alt="date" />{" "}
                    {dataProfile.createdAt}
                </p>
            </div>
            
        </div>
    )
}
