import React from 'react'
import Header from '../../Components/Header/Header'
import './indexlayout.css'

export default function IndexLayout(props) {
  
const {children} = props 
  
  return (
    <>
      <Header/>
      {children}
    </>
  )
}
