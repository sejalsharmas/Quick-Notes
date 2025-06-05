import React from 'react'
import './Notecard.css'

function deleteNote(index){
  const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  savedNotes.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(savedNotes));
  window.location.reload();
}
function NoteCard({
    index,
    title,
    description,
    category,
    emoji
}) {
  return (
    <div className="cards">
         <div className='note-card-emoji'>{emoji}</div>
  <div>
          <h2 className='note-card-title'>{title}</h2>
          <p className='note-card-description'>{description}</p>
          <spna className='note-card-category'>{category}</spna>
          <button className='delete-btn'
          onClick={() =>{
            deleteNote(index)
          }}
          >Delete</button>
         </div>
    </div>
  )
}

export default NoteCard