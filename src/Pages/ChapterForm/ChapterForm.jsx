import React from 'react'
import FormChapter from '../../Components/FormChapter/FormChapter'
import Header from '../../Components/Header/Header'
import './chapterform.css'
export default function HeroChapter() {
  return (
    <>
    <Header/>
    <div className='newchapter'>
        <h2>New Chapter</h2>
        <FormChapter/>
    </div>
   
    </>
  )
}
