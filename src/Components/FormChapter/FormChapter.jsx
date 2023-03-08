import{ React , useRef }from 'react'
import InputGeneral from "../InputGeneral/InputGeneral";
import './formchapter.css'
import axios from "axios";
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';

export default function FormChapter() {

    const {manga_id}=useParams()
    const title = useRef();
    const order = useRef();
    const pages = useRef();
    const formRef = useRef();
    

    async function handleSubmit(e) {
        e.preventDefault();
        let token = localStorage.getItem("token");
        let headers = {headers: {Authorization: `Bearer ${token}`}};
        
        let chapter = {  
          [title.current.name]: title.current.value,
          [pages.current.name]: pages.current.value,       
           ["manga_id"]: manga_id
         
          }     
            if (order.current.value) { 
             chapter[order.current.name] = order.current.value
           }
        console.log(chapter)
    
        let url = "http://localhost:8080/chapters";

       
          if (title.current.value.length < 4 && !pages.current.value.startsWith("")) {

           Swal.fire({
            icon: 'error',
           title: 'Error',
           text: 'The title must be at least 4 characteres y Pages must be a valid URL.',
            })
          return
          }else if  (title.current.value.length > 30 && !pages.current.value.startsWith("")) {
            Swal.fire({
             icon: 'error',
            title: 'Error',
            text: 'The title must not have more than 30 characters y Pages must be a valid URL.',
             }) 
             return

            }else if (title.current.value.length < 4 ) {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'The title must be at least 4 characteres ',
               })
             return
             }else if (title.current.value.length > 30 ) {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'The title must not have more than 30 characters ',
               })
            return
            }

             else if (!pages.current.value.startsWith("")){
             Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Pages must be a valid URL.',
              })
              return
          }


      
          try {
            await axios.post(url, chapter,headers);
            Swal.fire({
              icon: 'success',
              title: 'EXITO',
              text: 'Chapter created successfully',
          })
            
          } catch (error) {
            
            console.log(error);
            console.log("Ocurrió un error!");
            Swal.fire({
              icon: 'error',
              title: 'ERROR',
              
              text: error.response.data.message,
          })

        
          
          }
          formRef.current.reset();
      }
    
     



  return (
    
        <div className='chapter-contain'> 
            <form className='formchapter' ref={formRef} onSubmit={handleSubmit}>

            <input ref={title} type="text" id="title" name="title" required  placeholder='insert title' />
            <input ref={order} type="number" id="order" name="order"  placeholder='insert order' />
            <input ref={pages} type="text" id="pages" name="pages" required  placeholder='insert pages' />
          

            <InputGeneral
             type="submit"
             value="send"
             id="sign-up"
             style="style-4" 
            />
            </form>
        </div>
  )
}
