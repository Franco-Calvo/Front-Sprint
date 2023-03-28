import React from 'react'
import TableRole from '../../Components/tableRole/TableRole'
import './adminPanel.css'

export default function AdminPanel() {
  return (
  
        <>
            <div className='contenedor'>
                <div id='profileBackground'>
                    <h1>Panel</h1>
                </div>
                <div className='sectionAdminPanel'>
                    <div>
                    <h1>Entities</h1>
                    </div>
                    <div>
                        <TableRole/>
                    </div>
                </div>
            </div>
        </>
    
  )
}
