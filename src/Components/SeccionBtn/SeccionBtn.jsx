import React, { useEffect, useState } from 'react';
import './seccionBtn.css';
import { Link as Anchor, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../Store/Manga/actions';
import action from '../../Store/Capture/actions'

const { captureChapter } = actions;
const { capturestate } = action;

export default function SeccionBtn({ info }) {

  const page = Number(useParams().page)

  const dispatch = useDispatch();

  const [pagina, setPagination] = useState(page);
  const [capitulo, setCapitulo] = useState(true);

  let chapters = useSelector(store => store.mangas.chapter);
 
  function Manga() {
    setCapitulo(true)
    dispatch(capturestate({ buttonState: false }))
  }

  function Chapter() {
    setCapitulo(false)
    dispatch(capturestate({ buttonState: true }))
  }

  useEffect(() => {
    dispatch(captureChapter({ manga_id: info._id, page: pagina }));
  }, [pagina, capitulo]);


  return (
    <>
      <div className='details-btns'>
        <button className={capitulo ? 'manga-btn prueba' : 'manga-btn'} onClick={Manga} >Manga</button>
        <button className={!capitulo ? 'manga-btn prueba' : 'manga-btn'} onClick={Chapter}>Chapters</button>
      </div>
      {capitulo ?
      <div className='seccionTexto'>
          <p className='description-manga'>{info.description}</p>
      </div>
      :
      <section className='card-chapter'>
        {chapters?.length > 0 ?
          chapters.map(chapter => (
            <div key={chapter._id} className='sectionChapter'>
              <img className='selecChapter' src={chapter.manga_id.cover_photo} alt={chapter.title} />
                <div className='order-chapter'>
                  <p className='p-chapter'>Chapter #{chapter.order}</p>
                  <div className='coment-chapter'>
                    <button className="puntitos">. . .</button>
                    <p>{chapter.pages.length}</p>
                  </div>
                </div>
                <Anchor className='btn-read' to={`/chapters/${chapter._id}/${page}`}>
                  <button className='btn-read'>Read</button>
                </Anchor>
              </div>
            ))
            :
            <p>No Chapter found</p>
          }
          <div className='div-chapter'>
            {pagina !== 1 && <Anchor className='btn-chapter' to={'/mangas/' + info._id + '/' + (pagina - 1)}>
              <button className='btn-chapter' onClick={() => setPagination(pagina - 1)}>prev</button></Anchor>}

            {chapters?.length === 4 && <Anchor className='btn-chapter' to={'/mangas/' + info._id + '/' + (pagina + 1)}>
              <button className='btn-chapter' onClick={() => setPagination(pagina + 1)}>next</button></Anchor>}
          </div>
        </section>
      }
    </>
  );
}