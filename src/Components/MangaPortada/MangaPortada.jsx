
import React, { useState, useEffect } from 'react';
import './mangaPortada.css'
import axios from 'axios';

export default function MangaPortada(props) {
  const [manga, setManga] = useState({});

  useEffect(() => {
    async function fetchManga() {
      const response = await axios.get('http://localhost:8080/mangas/' + props.info);
      setManga(response.data.manga);
    }
    fetchManga();
  }, []);

  if (!manga.cover_photo || !manga.title) {
    return <div>Loading...</div>;
  }
  return (
    <div className="img-title">
      <img className="img-manga" src={manga.cover_photo} alt="Manga cover" />
      <p className="title">{manga.title}</p>
    </div>
  );
} 
