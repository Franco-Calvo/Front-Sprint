import React from 'react'
import './editProfile.css'

export default function EditProfile() {
    return (
        <>
            <div className='editProfile'>
                <form className='formEdit'>
                    <img id='imgProfile' src="./default-profile.png" alt="profile" />
                    <input name="name" className="inputAuthorForm" type="text" placeholder="Name" required />
                    <input name="last_name" className="inputAuthorForm" type="text" placeholder="Last Name" required />
                    <input name="city_country" className="inputAuthorForm" type="text" placeholder="City, Country" required />
                    <input name="date" className="inputAuthorForm" type="date" required />
                    <input name="photo" className="inputAuthorForm" type="text" placeholder="URL Profile Image" required />
                    <input className='btnsave' type="submit" value="Save" />
                    <input className='btndelete' type="submit" value="Delete Acount" />
                </form>
            </div>
        </>
    )
}
