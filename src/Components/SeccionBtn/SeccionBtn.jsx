import React from 'react'
import './seccionBtn.css'
import { useRef } from 'react'
import{ useState, useEffect } from 'react';
import { Link as Anchor } from 'react-router-dom'
import axios from 'axios';
import ImgManga from '../../imagenes/imgstatic.png'

export default function SeccionBtn(props) {

    let btnManga = useRef()
    let btnChapters = useRef()
    function selectboton() {
        btnChapters.current.classList.toggle('btn-select')
        btnManga.current.classList.toggle('btn-select')
    }

    const [manga, setManga] = useState({});
    useEffect(() => {
        async function fetchManga() {
            const response = await axios.get('http://localhost:8080/mangas/' + props.info);

            setManga(response.data.manga);
        }

        fetchManga();
    }, []); console.log(manga)

    if (!manga.description) {
        return <div>Loading...</div>;
    }

    return (
        <>

            <div className="btn-manga-chapter" >
                <div className='op-manga-chapter'>
                    <Anchor className='opciones btn-select' ref={btnManga} onClick={selectboton}>Manga</Anchor>
                    <Anchor className='opciones ' ref={btnChapters} onClick={selectboton}>Chapters</Anchor>
                </div>
            </div>
            <div className="descripcion" >
                <p>{manga.description}</p>
            </div>
            <div className="seccionChapters" >
               {/*  <img className="img-chapter" src={ImgManga} /> */}
                <div className="seccion1-chapter" >
                    <p>chapter#1</p>
                    <div className="seccion2-cahpters">
                        <button className="puntitos">. . .</button>
                        <h4>n° pagina</h4>
                    </div>
                </div>
                <button className="read" >Read</button>
            </div>
        </>
    )
}


