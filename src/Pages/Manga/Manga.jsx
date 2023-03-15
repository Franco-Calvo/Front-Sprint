import React,{ useEffect } from 'react'
import './manga.css'
import MangaPortada from '../../Components/MangaPortada/MangaPortada'
import InfoCatYcompany from '../../Components/InfoCatyCompany/InfoCatYcompany'
import BotonReacciones from '../../Components/BottonReacciones/BotonReacciones'
import InfoRectangulo from '../../Components/InfoRectangulo/InfoRectangulo'
import SeccionBtn from '../../Components/SeccionBtn/SeccionBtn'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import actions from '../../Store/Manga/actions'


const { captureManga } = actions
export default function Manga() {

    let manga = useSelector(store => store.mangas.manga)
    let _id = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(captureManga({ manga_id: _id.id}))
    }, [])

    return (

        <div className="contenedor">
           { manga.length!= 0?<MangaPortada info={manga}/>: null}
           { manga.length!= 0?<InfoCatYcompany info={manga}/>:null}
           <BotonReacciones />
            <InfoRectangulo />
          {manga.length!=0?<SeccionBtn  info={manga}/> : null}
        </div>

    )
}
