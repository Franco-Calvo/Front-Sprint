import React from 'react'
import './newRoleAuthor.css'
import { Link as Anchor } from 'react-router-dom'

export default function NewRoleAuthor() {
    return (
        <>
            <Anchor to={'/author-form'} className='text-author'>
                <div className='cont-author'>
                    <div className='profiles'>
                        <img id='img-profile' src='../Ellipse 3.png' alt='img' />
                        <img id='img-profile' src='../Ellipse 4.png' alt='img' />
                        <img id='img-profile' src='../Ellipse 5.png' alt='img' />
                    </div>

                    <div className='selec-author'>
                        <h3 >Join as an Author!</h3>
                        <p>I'm a reader writting a manga</p>
                    </div>
                </div>
            </Anchor>
        </>
    )
}