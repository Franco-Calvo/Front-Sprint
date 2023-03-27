import React, { useRef } from 'react'
import './EditDeleteButton.css'

export default function EditDeletebutton({style,test,type,onClick}) {
  return (
    <button 
    onClick={onClick}
    type={type} 
    id={style} >{test}</button>
  )
}

