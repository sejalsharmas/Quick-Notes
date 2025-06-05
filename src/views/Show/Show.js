import React,{ useEffect, useState } from 'react'
import './Show.css'
import Homeicon from '../../components/Homeicon/Homeicon'
import NoteCard from '../../components/NoteCard/NoteCard.js'


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
          const {index, title, description, category, emoji} = note;
          return(
              
                  <NoteCard
                  index={index}
                  title={title}
                  description={description}
                  category={category}
                  emoji={emoji}
                  />  
            )
})}</div>
       
      <Homeicon className='home-icons'/>
  </div>
  )
}

export default Show