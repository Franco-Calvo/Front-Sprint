import React from 'react'
import './EditDeleteButton.css'

export default function EditDeletebutton({style,test}) {
  return (
    <button type='button' id={style} >{test}</button>
  )
}

