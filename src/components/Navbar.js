import React from 'react'
import photo1 from '../assets/photo1.jpg';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftside'>
        <img src={photo1}></img>
      </div>
      <div className='rightSide'>
        <Link to= "/">Home</Link>
        <Link to= "/menu">Menu</Link>
        <Link to= "/about">About</Link>
        <Link to= "/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
