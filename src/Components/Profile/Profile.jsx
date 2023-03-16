import React from 'react'
import './profile.css'

export default function Profile() {
    return (

        <div className='profile'>
            <img id="profile-img" src="./default-profile.png" alt="profile" />
            <h2>romy</h2>
            <div className="data-author">
                <p >
                    <img id="icon1" src="../location-author.png" alt="location" />
                    ballester, bs as
                </p>
                <p >
                    <img id="icon1" src="../date-author.png" alt="date" />
                    12/03/25
                </p>
            </div>
        </div>
    )
}
