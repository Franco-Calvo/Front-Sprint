import React from 'react'
import './manga.css'
import BotonReacciones from '../../Components/BottonReacciones/BotonReacciones'
import MangaPortada from '../../Components/MangaPortada/MangaPortada'
import InfoRectangulo from '../../Components/InfoRectangulo/InfoRectangulo'
import InfoCatYcompany from '../../Components/InfoCatyCompany/InfoCatYcompany'
import { useParams } from 'react-router-dom'
import SeccionBtn from '../../Components/SeccionBtn/SeccionBtn'

export default function Manga() {
    let { id, page } = useParams()
    return (

        <div className="contenedor">
            <MangaPortada info={id} />
        {/*     <InfoCatYcompany />
            <BotonReacciones />
            <InfoRectangulo />
            <SeccionBtn info={id} /> */}
        </div>

    )
}
