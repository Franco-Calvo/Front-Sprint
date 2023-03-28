
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './imputActive.css';
import captureActions from '../../Store/Capture/actions.js';
import updateAuthor from '../../Store/Author/actions.js';
import updateCompany from '../../Store/Company/actions.js';

const { captureState } = captureActions;
const { update_active_author } = updateAuthor;
const { update_active } = updateCompany;

export default function InputActive({ item, author }) {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false); // input active o no active

  useEffect(() => {
    setActive(item.active)
  }, [])

  function handleActive() {
    try {
      setActive(!active);
      
      dispatch(captureState({ buttonState: !active }));
      if(author){
        dispatch(update_active_author({ _id: item._id, active: !active }));
      }else{
        dispatch(update_active({ _id: item._id, active: !active }));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className={active ? 'btn-active' : 'btn-inactive'}>
        <button className={active ? 'btn-option-entities prueba-entities' : 'btn-option-entities'} onClick={handleActive}></button>
        <button className={!active ? 'btn-option-entities prueba-entities' : 'btn-option-entities'} onClick={handleActive}></button>
      </div>
    </>
  );
}


