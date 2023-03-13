import React,{ useEffect } from 'react'
import './manga.css'
import MangaPortada from '../../Components/MangaPortada/MangaPortada'
/* import BotonReacciones from '../../Components/BottonReacciones/BotonReacciones'
import InfoRectangulo from '../../Components/InfoRectangulo/InfoRectangulo'
import InfoCatYcompany from '../../Components/InfoCatyCompany/InfoCatYcompany' */
//import SeccionBtn from '../../Components/SeccionBtn/SeccionBtn'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import actions from '../../Store/Manga/actions'


const { CaptureManga } = actions
export default function Manga() {

    const dispatch = useDispatch()
    let _id = useParams()
    let manga = useSelector(store => store)
    console.log(useSelector(store => store))
    //console.log(manga)
    useEffect(() => { dispatch(CaptureManga({ manga_id: _id.id })) }, [])

    return (

        <div className="contenedor">
           { manga.lenght!== 0?<MangaPortada info={manga}/>: null}
            {/* <InfoCatYcompany />
            <BotonReacciones />
            <InfoRectangulo />
            <SeccionBtn />  */}
        </div>

    )
}
