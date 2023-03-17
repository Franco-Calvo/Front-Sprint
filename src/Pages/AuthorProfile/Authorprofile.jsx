import React from 'react'
import './authorProfile.css'
import EditProfile from '../../Components/EditProfile/EditProfile'
import Profile from '../../Components/Profile/Profile'

export default function Authorprofile() {
    return (
        <>
            <div className='contenedor'>
                <div id='profileBackground'>
                    <h1>Profile</h1>
                </div>
                <div className='sectionProfile'>
                    <EditProfile />
                    <Profile/>
                </div>
            </div>
        </>
    )
}

