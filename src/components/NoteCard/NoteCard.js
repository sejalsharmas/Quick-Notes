import React from 'react'
import './Notecard.css'

function deleteNote(id){
  const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  const updatedNotes = savedNotes.filter(note => note.id !== id);
  localStorage.setItem('notes', JSON.stringify(updatedNotes));
  window.location.reload();
}
function NoteCard({
    id,
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
            onClick={() => deleteNote(id)}
          >Delete</button>
         </div>
    </div>
  )
}

export default NoteCard