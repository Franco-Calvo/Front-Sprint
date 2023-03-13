import React, { useRef, useState, useEffect } from 'react'
import './seccionBtn.css'
import { Link as Anchor } from 'react-router-dom'
import axios from 'axios';
import ImgManga from '../../imagenes/imgstatic.png'

export default function SeccionBtn(props) {

    let btnManga = useRef()
    let btnChapters = useRef()

    useEffect(() => {
        const selectboton = (event) => {
            if (event.target === btnManga.current) {
               
                document.querySelector('descripcion').style.display = 'block';
                document.querySelector('.seccionChapters').style.display = 'none';
            } else if (event.target === btnChapters.current) {
               
                document.querySelector('descripcion').style.display = 'none';
                document.querySelector('.seccionChapters').style.display = 'block';
            }
        };

        btnManga.current.classList.add('btn-select'); 
        btnManga.current.addEventListener('click', selectboton);
        btnChapters.current.addEventListener('click', selectboton);

        return () => {
            btnManga.current.removeEventListener('click', selectboton);
            btnChapters.current.removeEventListener('click', selectboton);
        }
    }, [btnManga, btnChapters]);

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
                    <Anchor className='opciones' ref={btnManga}>Manga</Anchor>
                    <Anchor className='opciones' ref={btnChapters}>Chapters</Anchor>
                </div>
            </div>
            <div className="descripcion" >
                <p>{manga.description}</p>
            </div>
            <div className="seccionChapters" >
                <img className="img-chapter" src={ImgManga} />
                <div className="seccion1-chapter" >
                    <p>{manga.order}</p>
                    <div className="seccion2-cahpters">
                        <button className="puntitos">. . .</button>
                        <h4>{manga.pages}</h4>
                    </div>
                </div>
                <button className="read" >Read</button>
            </div>
        </>
    )
}

