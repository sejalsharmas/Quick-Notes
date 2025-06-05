import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1 className='text-center text-primary app-title'>📋 Quick Notes</h1>
      <p className='text-center' style={{ fontSize: '20px' }}>
        A simple note-taking application where you can <span style={{color: 'black', backgroundColor: 'beige'}}>create, read, and delete notes</span> 📒🛡️🧠.
      </p>
      <div className="card-container">
        <div className="card">
          <h2 className='text-center'>🧠 Think Better</h2>
           <p className="card-text text-primary">Start capturing your thoughts, one note at a time.🧠</p>
        </div>
        <div className="card">
           <h2 className='text-center'>💡Focus Mode</h2>
           <p className="card-text text-primary">One task. One goal. One amazing result.</p>
        </div>
        <div className="card">
           <h2 className='text-center'>🎯Stay on Target</h2>
           <p className="card-text text-primary">Today’s effort builds tomorrow’s success.</p>
        </div>
      </div>
      <div className='btn-container'>
        <Link to={'/add'}>
        <button className='btn-primary'>✍️ Add Notes</button>
        </Link>
        <Link to={'/show'}>
        <button className='btn-primary'>📖 Show Notes</button>
        </Link>
      </div>
      

    </div>
  )
}

export default Home
