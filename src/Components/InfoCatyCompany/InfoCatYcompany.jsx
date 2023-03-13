import React, { useState, useEffect } from 'react';
import './info.css'
import axios from 'axios';
export default function InfoCatYcpmmpany(props) {
  const [manga, setManga] = useState({});

  useEffect(() => {
    async function fetchManga() {
      const response = await axios.get('http://localhost:8080/mangas/' + props.info);

      setManga(response.data.manga);
    }

    fetchManga();
  }, []); console.log(manga)

  if (!manga.category.name || !manga.author.name) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="category-company">
        <button className="category">{manga.category.name}</button>

        <h3 className="company">{manga.author.name}</h3>
      </div>
    </>
  );
}
