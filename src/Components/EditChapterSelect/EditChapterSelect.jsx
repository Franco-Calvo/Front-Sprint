import React from 'react'
import './EditChapterSelect.css'

export default function EditChapterSelect({opc1,style,name,data,onChange}) {
  return (
    <select onChange={onChange} name={name} className={style}>
            <option value='default'>{opc1}</option>
            {data?.map((each,index)=>
            <option key={each._id?each._id:index} value={each._id?each._id:each}>{each.title?each.title:each}</option>)}
    </select>
    )
}
