import React from 'react'
import './newRoleCompany.css'
import { Link as Anchor } from 'react-router-dom'


export default function NewRoleCompany() {
    return (
        <>
            <Anchor to={'/create-company'}className='text-author'>
                <div className='cont-company'>
                    <div className='profiles'>
                        <img id='img-profile' src='./ellipse 3 (1).png' alt='img'/>
                        <img id='img-profile' src='./ellipse 4 (1).png' alt= 'img'/>
                        <img id='img-profile' src='./ellipse 5 (1).png' alt= 'img'/>
                    </div>
                    <div className='selec-company'>
                        <h3>Join as an Company!</h3>
                        <p>I'm a company and I want to publish my comics</p>
                    </div>

                </div>
            </Anchor>
        </>
    )
}