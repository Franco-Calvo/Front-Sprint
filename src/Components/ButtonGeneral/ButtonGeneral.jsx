import React from 'react'
import './buttongeneral.css'

export default function ButtonGeneral(props) {
  return (
    <button className={props.style} type={props.type} onClick={props.onClick} onSubmit={props.onSubmit}>
    <img src={props.image} alt="" />
    {props.text}
    </button>
  )
}
