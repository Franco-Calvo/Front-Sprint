import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Page() {
  const { id, page } = useParams();
  const history = useHistory();
  const [chapter, setChapter] = useState(null);
  const [currentPage, setCurrentPage] = useState(parseInt(page));
  
  useEffect(() => {
    const getChapter = async () => {
      try {
        const res = await axios.get(`/api/chapters/${id}`);
        setChapter(res.data.Chapter);
      } catch (err) {
        console.error(err);
      }
    }
    getChapter();
  }, [id]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      history.push(`/chapters/${id}/${currentPage - 1}`);
    }
  }

  const handleNextPage = () => {
    if (currentPage < chapter.pages.length) {
      setCurrentPage(currentPage + 1);
      history.push(`/chapters/${id}/${currentPage + 1}`);
    }
  }

  const handleFirstPageLeft = () => {
    if (currentPage === 1) {
      history.push(`/chapters/${id}`);
    }
  }

  const handleLastPageRight = () => {
    if (currentPage === chapter.pages.length) {
      // Aquí necesitamos obtener el id del capítulo siguiente y redirigir a su primera página.
      // Podríamos hacer esto usando una nueva llamada a la API o almacenando la información en el estado.
    }
  }

  if (!chapter) {
    return <p>Loading...</p>;
  }

  const pageImage = chapter.pages[currentPage - 1];

  return (
    <div>
      <img src={pageImage} alt={`Page ${currentPage}`} />
      <div>
        <button onClick={handlePrevPage}>PREV</button>
        <button onClick={handleNextPage}>NEXT</button>
      </div>
      <div>
        <button onClick={handleFirstPageLeft}>PREV</button>
        <button onClick={handleLastPageRight}>NEXT</button>
      </div>
    </div>
  ) }