import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "./page.css"


export default function Chapters() {

    
    let navigate = useNavigate()
    let url = `http://localhost:8080/chapters/`
    let { id, page } = useParams()    
    let [ chapter, setChapter ] = useState({})
    let [ next, setNext ] = useState('')
    let [ prev, setPrev ] = useState('')
    let [ index, setIndex ] = useState(parseInt(page))

        useEffect(
            () => {
                axios.get(url+id)
                .then( response => { 
                    setChapter( response.data.chapter)
                    setPrev(response.data.prev);
                    setNext( response.data.next)
                })
                .catch(error => console.log(error))
            },
            []
        ) 

        let handlePrev = () => {
            setIndex( index - 1)
            navigate(`/chapters/${id}/${index - 1}`) 
            if( index <= 0 && chapter.order == 1){
                navigate(`/mangas/${chapter.manga_id}/${1}`)
            }
            else if( index <= 0 ) {
                navigate(`/chapters/${prev}/0`)
                window.location.reload(true)
            }
        }
        let handleNext = (e) => {
            setIndex( index + 1)
            navigate(`/chapters/${id}/${index + 1}`) 
            if( index >= chapter.pages.length-1){
                navigate(`/chapters/${next}/0`)
                window.location.reload(true)    
            } }
        

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

