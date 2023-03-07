import React, { useState } from 'react';
import { useRef } from 'react';
import '../MangaForm/mangaform.css';
import axios from 'axios';
import Swal from 'sweetalert2';


export default function CreateManga() {
    const [categorias, setCategorias] = useState([])
    let title = useRef();
    let category = useRef();
    let description = useRef();
    let coverPhoto = useRef();
    let formulario = useRef();

    async function handleSubmit(e) {
        e.preventDefault();
        let manga = {
            title: title.current.value,
            // category: category.current.value,
            description: description.current.value,
            cover_photo: coverPhoto.current.value,
            category_id: "63fe8112f09373806fd89fe5"
        };
        const url = 'http://localhost:8080/mangas'
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        try {
            await axios.post(url, manga, headers)
            formulario.current.reset()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Manga created successfully",
                showConfirmButton: false,
                timer: 1500
              })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data.message[0],
              })
        }
    }

    async function renderCategory() {
        await axios.get('http://localhost:8080/mangas').then((response) => { setCategorias(response.data.categories) })
    }
    //console.log(categorias)

    return (
        <div className='contenedor'>
            <div className='formcontent'>
                <section >
                    <h2 className='title'>New Manga</h2>
                </section>
                <form ref={formulario} className='form' onSubmit={handleSubmit}>
                    <input className='forminput' type='text' placeholder='Insert title' ref={title} />
                    <select className='forminput' id='selectMove' ref={category} onClick={renderCategory}>
                        <option value=''> Insert category</option>
                        {categorias.map(categoria => <option key={categoria.name} value={categoria.name}>{categoria.name}</option>)}
                    </select>
                    <input className='forminput' type='text' placeholder='Insert description' ref={description} />
                    <input className='forminput' type='text' placeholder='Insert cover photo' ref={coverPhoto} />
                    <input id="button-manga" type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}
