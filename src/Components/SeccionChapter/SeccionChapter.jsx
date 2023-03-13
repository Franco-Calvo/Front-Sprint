import React from 'react'
import './seccionChapter.css'
import ImgManga from '../../imagenes/imgstatic.png'

export default function SeccionChapter() {
    return (
        <>
            <div className="seccionChapters" >
                <img className="img-chapter" src={ImgManga} />
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
