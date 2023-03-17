import React from 'react'
import './EditChapterSelect.css'

export default function EditChapterSelect({opc1,style,name}) {
  return (
    <select name={name} className={style}>
            <option value='default'>{opc1}</option>
    </select>
    )
}
