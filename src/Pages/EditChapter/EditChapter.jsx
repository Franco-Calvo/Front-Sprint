import React from 'react'
import EditChapterSelect from '../../Components/EditChapterSelect/EditChapterSelect'
import EditDeletebutton from '../../Components/EditDeleteButton/EditDeletebutton'
import './EditChapter.css'

export default function EditChapter() {
  return (
    <div id='container-edit-chapter'>
        <section id='edit-chapter-section'>
            <form id='edit-chapter-form'>
                <div>
                    <p id='title-edit-chapter'>Edit Chapter</p>
                </div>
                <div>
                    <p id='manga-name-edit-chapter'>Alice in Borderland</p>
                    <EditChapterSelect name='select-chapter' opc1='select chapter' style='edit-chapter-select'/>
                    <EditChapterSelect name='select-data' opc1='select data' style='edit-chapter-select'/>
                    <input id='data-input-edit-chapter' type="text" placeholder='data to edit' />
                </div>
                <div>
                    <EditDeletebutton style='edit-button' test='Edit'/>
                    <EditDeletebutton style='delete-button' test='Delete'/>
                </div>
            </form>
        </section>
        <section id='cover-photo-section'>
            <p>Chapter #1 - Welcome - part 1 </p>
            <img id='edit-chapter-photo' src="https://i.postimg.cc/PqQHYqrL/main-alice-in-borderland.jpg" alt="Cover Photo" />
        </section>
    </div>
  )
}
