import React from 'react'
import './botonMovil.css'
import { useRef } from 'react'
import { Link as Anchor } from 'react-router-dom'

export default function BotonMovil() {
    let btnManga = useRef()
    let btnChapters = useRef()
    function selectboton() {
        btnChapters.current.classList.toggle('btn-select')
        btnManga.current.classList.toggle('btn-select')
    }
        return (
            <>
 <div className="btn-manga-chapter" >
                    <div className='op-manga-chapter'>
                        <Anchor className='opciones btn-select' ref={btnManga} onClick={selectboton}>Manga</Anchor>
                        <Anchor className='opciones ' ref={btnChapters} onClick={selectboton}>Chapters</Anchor>
                    </div>
                </div>
            </>
        )
    }

