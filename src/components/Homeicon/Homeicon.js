import React from 'react'
import { Link } from 'react-router-dom'
import './Homeicon.css'
import home from './../../assets/home.png'

function Homeicon() {
  return (
    <div>
      <Link to={'/'}>
      <img src={home} alt='home-icon' className='home-icon'></img>
      </Link>
    </div>
  )
}

export default Homeicon