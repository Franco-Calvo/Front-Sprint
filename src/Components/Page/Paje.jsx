import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "./page.css"


export default function Chapters() {

    let navigate = useNavigate()
    let url = `http://localhost:8080/chapters/`
    let { id, page} = useParams()    
    let [ chapter, setChapter ] = useState({})
    let [ index, setIndex ] = useState(parseInt(page))

    useEffect(() => {
        axios.get(url+id)
            .then(response => setChapter(response.data.chapter))
            .catch(error => console.log(error))
    }, [])

    let handlePrev = () => {
        setIndex( index - 1)
        navigate(`/chapters/${id}/${index - 1}`) 
        if( index <= 0){
            navigate(`/mangas/${id}/${1}`)
        }

    }

    let handleNext = () => {
        setIndex( index + 1)
        navigate(`/chapters/${id}/${index + 1}`) 
        if( index > chapter.pages?.length){
            axios.get()
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
               <h5>Capítulo {chapter.number} - {chapter.title}</h5>
           </div>
           <div className='capitulo-img'><img src={chapter.pages?.[index]} alt='comicimage'/></div>
          </div>

           <div className='next' onClick={handleNext}>
               <img src='../../next.png' alt='nextarrow'/>
           </div>

           
       </div>
       <div className='coment'> <p>...</p></div>
       </div>
    )
}




// import React from 'react'
// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'


// export default function ChapterDetails() {
//     let { id, pages } = useParams()
//     let url = `http://localhost:8080/chapters/${id}`
//     let [Chapter, setChapter] = useState([])

//     useEffect(
//         ()=>{
//             axios.get(url)
//                 .then( res =>{
//                     setChapter(res.data.chapters)
//                     let data = res.data
//                     console.log(data)
//                 })
//                 .catch(error => console.log(error))
//         }
//     )
//     return (
//     <div className='chapters '>
//         <div className='chapter'>
//             <p className='parrafo-chapter'> n° de cap - nombre del capítulo </p>
//         </div>
//     </div>
// )}

