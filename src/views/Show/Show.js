import React,{ useEffect, useState } from 'react'
import './Show.css'
import Homeicon from '../../components/Homeicon/Homeicon'
import NoteCard from '../../components/NoteCard/NoteCard.js'
import { Link } from 'react-router-dom'


function Show() {

  const [notes, setNotes] = useState([])

  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, [])
  return (
      <div>
       <h1 className='text-center text-primary app-title'>📖 Show Notes</h1>
       
        <div className='note-card-container'>
        {notes.map((note)=>{
          const {id, title, description, category, emoji} = note;
          return(
              
                  <NoteCard
                   key={note.id}
                   id={note.id}
                  title={title}
                  description={description}
                  category={category}
                  emoji={emoji}
                  />  
            )
})}</div>
      <Link to={'/add'}>
      <button className='btn-primary button'>Add Notes</button>
      </Link>
       
      <Homeicon className='home-icons'/>
  </div>
  )
}

export default Show