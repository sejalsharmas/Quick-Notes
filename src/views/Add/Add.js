import React, { useState } from 'react'
import './Add.css'
import Homeicon from '../../components/Homeicon/Homeicon'
import EmojiPicker from 'emoji-picker-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';


function Add() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [emoji, setEmoji] = useState('')
  const [openEmojiDialog, setOpenEmojiDialog] = useState(false);

  const addNote = () =>{
    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    const noteObject = {
      id: Date.now(),
      title,
      description,
      category,
      emoji,
    }

    notes.push(noteObject);
    localStorage.setItem('notes', JSON.stringify(notes));

    toast.success('Note Added Successfully')
    setTitle('');
    setDescription('');
    setCategory('');
    setEmoji('');
    setOpenEmojiDialog(false);

  }

  return (
    <div>
      <h1 className='text-center text-primary app-title'>✍️ Add Notes</h1>
      <Homeicon/>

      <input
      type='text'
      placeholder='Title'
      value={title}
      onChange={(e) =>{
        setTitle(e.target.value)
      }}
      className='user-input'
      />

       <input
      type='text'
      placeholder='Description'
      value={description}
      onChange={(e) =>{
        setDescription(e.target.value)
      }}
      className='user-input'
      />
     
       <input
      type='text'
      placeholder='Emoji'
      value={emoji}
      onChange={(e) =>{
        setEmoji(e.target.value)
      }}
      className='input-emoji'
      disabled={true}
      />

      <button type='button' 
      onClick={() => setOpenEmojiDialog(true)}
      className='btn-primary btn-select'
      >Select Emoji</button>

      <EmojiPicker 
      open={openEmojiDialog}
      height={'300px'}
      width={'340px'}
      onEmojiClick={(emojiObject) =>{
        setEmoji(emojiObject.emoji)
        setOpenEmojiDialog(false)
      }}
      className='emoji-picker'
      />

      <select value={category} onChange={(e) =>{setCategory(e.target.value)}}
        className='user-input '>
        <option value=''>Select Category</option> 
        <option value="shopping">Shopping</option>
        <option value="personal">Personal</option>
        <option value="studying">Studying</option>
        <option value="work">Work</option>
       </select>
     <div className='btn-container'>
      <button
      type='button'
      onClick={()=>{
       setTitle("")
       setDescription("");
       setCategory("");
       setEmoji("");
      }}
      className='clear-btn'>
        Clear
      </button>

      <button
      type='button'
      className=' clear-btn'
      onClick={addNote}>
        ➕ Add
      </button>
      
      <Link to={'/show'}>
      <button
      className=' clear-btn'>
        Show Notes
      </button>
      </Link>
      </div>
    </div>
  )
}

export default Add