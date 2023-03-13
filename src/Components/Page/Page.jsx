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
    }, [id, page, url])

 
    let handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1)
            navigate(`/chapters/${id}/${index - 1}`)
        } else {
            navigate(`/mangas/${id}/${1}`)
        }
    }

    let handleNext = () => {
        if (index < chapter.pages?.length - 1) {
            setIndex(index + 1)
            navigate(`/chapters/${id}/${index + 1}`)
        } else {
            navigate(`/mangas/${id}/${1}`)
        }
    }

    console.log(chapter)
    return (
        <div className='page'>
          <div className='container-page'>
           
           <div className='prev' onClick={handlePrev}>
               <img src='../../prev.png' alt='prevarrow'/>
           </div>
           
          <div className='img-text'> 
          <div className='text-capitulo'>
               <h5>Capítulo {chapter.order} - {chapter.title}</h5>
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












// let navigate = useNavigate()
//     let url = `http://localhost:8080/chapters/`
//     let { id, page} = useParams()    
//     let [ chapter, setChapter ] = useState({})
//     let [ index, setIndex ] = useState(parseInt(page))

//     useEffect(() => {
//         axios.get(url+id)
//             .then(response => {
//                 setChapter(response.data.chapter)
//                 if (parseInt(page) >= response.data.chapter.pages.length) {
//                     setIndex(response.data.chapter.pages.length - 1)
//                 }
//             })
//             .catch(error => {
//                 console.log(error)
//                 alert('Ha ocurrido un error al obtener el capítulo.')
//             })
//     }, [id, page, url])

    // let handlePrev = () => {
    //     if (index > 0) {
    //         setIndex(index - 1)
    //         navigate(`/chapters/${id}/${index - 1}`)
    //     } else {
    //         navigate(`/mangas/${id}/${1}`)
    //     }
    // }

    // let handleNext = () => {
    //     if (index < chapter.pages?.length - 1) {
    //         setIndex(index + 1)
    //         navigate(`/chapters/${id}/${index + 1}`)
    //     } else {
    //         navigate(`/mangas/${id}/${1}`)
    //     }
    // }