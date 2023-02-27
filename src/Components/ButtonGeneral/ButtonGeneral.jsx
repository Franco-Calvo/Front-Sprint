import React from 'react'
import './buttongeneral.css'

export default function ButtonGeneral(props) {
  return (
    <button className={props.style} type={props.type} >
    <img src={props.image} alt="" />
    {props.text}
    </button>
  )
}
