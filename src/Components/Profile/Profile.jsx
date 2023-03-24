import { useSelector } from "react-redux";
import './profile.css'
export default function Profile() {
    let author = useSelector(store => store.Author.author)
    const authorDate = author?.date?.split('T')[0]
    return (

        <div className='profile-section'>
          
           <img id="profile-img" src={author.photo} alt="profile" />
            <div className="data-Profile-author">
                <h2>{author?.name} {author?.last_name}</h2>
                <p ><img id="icon-date" src="../location-author.png"  alt="location" />{author?.city} ,{author?.country}</p>
                <p ><img id="icon-date" src="../date-author.png" />{authorDate}</p>
            </div>
            
        </div>
    )
}