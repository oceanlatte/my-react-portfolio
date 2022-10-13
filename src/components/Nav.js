import React from 'react';
import '../App.css';

function Nav() {
  
  return (
    <nav className='d-flex nav-links'>
      <a href='#about' className='px-3 nav-links' >
          About Me
        </a>
      <a href='#portfolio' className='px-3 nav-links'>
          Portfolio
        </a>
      <a href='#contact' className='px-3 nav-links' >
          Contact
        </a>
      <a href='#resume' className='px-3 nav-links'>
          Resume
        </a>
    </nav>
  )
}

export default Nav;