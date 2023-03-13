import React from 'react'
import './manga.css'
import BotonReacciones from '../../Components/BottonReacciones/BotonReacciones'
import MangaPortada from '../../Components/MangaPortada/MangaPortada'
import InfoRectangulo from '../../Components/InfoRectangulo/InfoRectangulo'
import SeccionChapter from '../../Components/SeccionChapter/SeccionChapter'
import BotonMovil from '../../Components/BotonMovil/BotonMovil'
import Descripcion from '../../Components/TextoDescripcion/Descripcion'
import InfoCatYcompany from '../../Components/InfoCatyCompany/InfoCatYcompany'
import { useParams } from 'react-router-dom'

export default function Manga() {
    let { id, page } = useParams()
    return (

        <div className="contenedor">
            <MangaPortada info={id} />
      {/*       <InfoCatYcompany /> */}
            <BotonReacciones />
            <InfoRectangulo />
            <BotonMovil />
            <Descripcion info={id} />
            <SeccionChapter />
        </div>

    )
}
