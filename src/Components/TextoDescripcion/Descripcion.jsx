
import React, { useState, useEffect } from 'react';
import './descripcion.css'
import axios from 'axios';


export default function MangaPortada(props) {
    const [manga, setManga] = useState({});
  
    useEffect(() => {
      async function fetchManga() {
          const response = await axios.get('http://localhost:8080/mangas/' + props.info);
          
         setManga(response.data.manga);
        }
  
      fetchManga();
    }, []);console.log(manga)
  
    if (!manga.description ) {
      return <div>Loading...</div>;
    }
  
    return (
        <>
        <div className="descripcion" >
            <p>{manga.description}</p>
        </div>
    </>
    );
  } 

