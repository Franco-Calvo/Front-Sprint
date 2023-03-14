import React, { useEffect, useState } from 'react';
import './seccionBtn.css';
import { Link as Anchor } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../Store/Manga/actions';

const { captureChapter } = actions;

export default function SeccionBtn({ info }) {
  const dispatch = useDispatch();
  const [pagination, setPagination] = useState(1);
  const [capitulo, setCapitulo] = useState(true);

  let chapters = useSelector(store => store.mangas.chapter);
console.log(useSelector(store => store))
  useEffect(() => {
    dispatch(captureChapter({ manga_id: info._id, page: pagination }));
  }, [pagination]);

  return (
    <>
      <div className='details-btns'>
        <button className={capitulo === true ? 'manga-btn prueba' : 'manga-btn'} onClick={() => setCapitulo(true)}>Manga</button>
        <button className={capitulo === false ? 'manga-btn prueba' : 'manga-btn'} onClick={() => setCapitulo(false)}>Chapters</button>
      </div>

      {capitulo === true ?
        <div className='description-manga'>
          <p>{info.description}</p>
        </div>
        :
        <section className='card-chapter'>
          {chapters.length > 0 ?
            chapters.map(chapter => (
              <div key={chapter._id} className='sectionChapter'>
                <img className='selecChapter' src={chapter.manga_id.cover_photo} alt={chapter.title} />
                <div className='order-chapter'>
                  <p className='p-chapter'>Chapter #{chapter.order}</p>
                  <div className='coment-chapter'>
                    <button className="puntitos">. . .</button>
                    <p>169</p>
                  </div>
                </div>
                <button className='btn-read'>Read</button>
              </div>
            ))
            :
            <p>No Chapter found</p>
          }
          <div className='div-chapter'>
            {pagination !== 1 && <Anchor to={'/mangas/' + info._id + '/' + (pagination - 1)}><button className='btn-chapter' onClick={() => setPagination(pagination - 1)}>prev</button></Anchor>}
            {chapters.length === 4 && <Anchor to={'/mangas/' + info._id + '/' + (pagination + 1)}><button className='btn-chapter' onClick={() => setPagination(pagination + 1)}>next</button></Anchor>}
          </div>
        </section>
      }
    </>
  );
}

 