import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import EditChapterSelect from '../../Components/EditChapterSelect/EditChapterSelect'
import EditDeletebutton from '../../Components/EditDeleteButton/EditDeletebutton'
import './EditChapter.css'
import chapterAction from '../../Store/EditDeleteChapter/actions'
import { useParams } from 'react-router';
import axios from "axios";

const { captureAllChapter, captureManga } = chapterAction
let url;
let chapterSelect;
let typeData='default';
let edit=false;

export default function EditChapter() {

    const select = useRef();
    const dataEdit = useRef();
    const [reload, setReload] = useState(false)
    const [reloadChapter, setReloadChapter] = useState(false)
    const dispatch = useDispatch();
    const {manga_id}=useParams();
    const AllChapter = useSelector((store) => store.editDeleteChapter.chapters);
    const manga = useSelector((store) => store.editDeleteChapter.manga);
    let token = localStorage.getItem("token");
    let headers = {headers: {Authorization: `Bearer ${token}`}};
    url = "http://localhost:8080/chapters/"+manga_id;
    chapterSelect = AllChapter.find(each=>each._id===select.current.children[1].value)
    
    useEffect(()=>{
        if(manga.length===0||manga._id!==manga_id){
            dispatch(captureManga({manga_id: manga_id}))
        }
    },[])
    useEffect(()=>{
        if(AllChapter.length===0||manga._id!==manga_id||edit){
            dispatch(captureAllChapter({manga_id: manga_id}))
            edit=false;
        }
    },[reloadChapter])

    function handleChange(){
        typeData = select.current.children[2].value
        //Object.keys(chapterSelect)
        setReload(!reload)
    }
    async function handleEdit(e){
        e.preventDefault()
        if(typeData!='default'){
            let data ={
                "_id": chapterSelect._id,
                [typeData]:dataEdit.current.value
            }
            try {
                await axios.put(url, data, headers);
                setReloadChapter(!reloadChapter)
                edit=true
                console.log('editado con exito');
                dataEdit.current.value=""
            } catch (error) {
                console.log(error);
            }
        }else{
            console.log('alerta, debe seleccionar que caracter y dato desea editar');
        }
    }
    async function handleDelete(){
        if(chapterSelect!=undefined){
            url = "http://localhost:8080/chapters/"+chapterSelect._id;
            try {
                await axios.delete(url, headers);
                setReloadChapter(!reloadChapter)
                edit=true
                console.log('borrado con exito con exito');
                select.current.children[1].value='default'
                dataEdit.current.value=""
                handleChange()
            } catch (error) {
                console.log(error);
            }
        }else{
            console.log('alerta, debe seleccionar que caracter y dato desea eliminar');
        }
    }

    console.log(useSelector(store=>store));
    
  return (
    <div id='container-edit-chapter'>
        <section id='edit-chapter-section'>
            <form id='edit-chapter-form' onSubmit={handleEdit}>
                <div>
                    <p id='title-edit-chapter'>Edit Chapter</p>
                </div>
                <div ref={select}>
                    <p id='manga-name-edit-chapter'>{manga.title}</p>
                    <EditChapterSelect 
                    onChange={handleChange} 
                    data={AllChapter} 
                    name='select-chapter' 
                    opc1='select chapter' 
                    style='edit-chapter-select'/>
                    <EditChapterSelect
                    onChange={handleChange} 
                    data={chapterSelect?['title','pages','order','cover_photo']:[]}
                    name='select-data' 
                    opc1='select data' 
                    style='edit-chapter-select'/>
                    <input
                    required
                    disabled={typeData==='default'?true:false}
                    ref={dataEdit} 
                    id='data-input-edit-chapter' 
                    type="text" 
                    placeholder='data to edit' />
                </div>
                <div>
                    <EditDeletebutton 
                    type='submit' 
                    style='edit-button' 
                    test='Edit'/>
                    <EditDeletebutton 
                    type='button'
                    onClick={handleDelete}
                    style='delete-button' 
                    test='Delete'/>
                </div>
            </form>
        </section>
        <section id='cover-photo-section'>
            <p>{chapterSelect?chapterSelect.title:manga.title}</p>
            <img id='edit-chapter-photo' src={chapterSelect?chapterSelect.cover_photo:manga.cover_photo} alt="Cover Photo" />
        </section>
    </div>
  )
}
