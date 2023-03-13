import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "./page.css"


export default function Chapters() {

    
    const navigate = useNavigate()
    const { id, page } = useParams()
    const url = `http://localhost:8080/chapters/${id}`
    const [chapter, setChapter] = useState({})
    const [index, setIndex] = useState(Number(page))
    const maxIndex = (chapter?.pages?.length || 0) - 1

    useEffect(() => {
        axios.get(url).then(res => {
        setChapter(res.data.chapter);
        setIndex(Number(page));
    }).catch(error => console.log(error));
    }, [id, page, url]);

function handlePrev() {
    const newIndex = index - 1
    if (newIndex < 0) {
        navigate(`/mangas/${id}/1`)
    } else {
        setIndex(newIndex)
        navigate(`/chapters/${id}/${newIndex}`)
    }
}

function handleNext() {
    const newIndex = index + 1
    if (newIndex > maxIndex) {
        navigate(`/chapters/640b93d67f41e871c0ed663d/0`)
    } else {
        setIndex(newIndex)
        navigate(`/chapters/${id}/${newIndex}`)
    }
}

    return (
        <div className='page'>
          <div className='container-page'>
           
           <div className='prev' onClick={handlePrev}>
               <img src='../../prev.png' alt='prevarrow'/>
           </div>
           
          <div className='img-text'> 
          <div className='text-capitulo'>
               <h5>Capítulo {chapter.order} - {chapter.title} - Page {index} </h5>
           </div>
           <div className='capitulo-img'><img src={chapter.pages?.[index]} alt='comicimage'/></div>
          </div>

           <div className='next' onClick={handleNext}>
               <img src='../../next.png' alt='nextarrow'/>
           </div>

           
       </div>
       <div className='coment-number'>
       <div className='coment'> <p>...</p> </div>
       <h6>24</h6>
       </div>
       
       </div>
    )
}

