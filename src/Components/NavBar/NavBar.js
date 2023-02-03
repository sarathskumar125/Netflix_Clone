import React from 'react'
import './NavBar.css'
import netflix from './netflix.png'
import avatar from './avatar.png'


function NavBar() {
  return (
    <div className='navbar'>
        <img  className='logo' src={netflix} alt=" not found" />
        <img className='avatar' src={avatar} alt=" not found" />
        
    </div>
  )
}


export default NavBar