import React, { useState } from 'react';
import '../App.css';

function Nav(props) {
  const { linkSelected, setLinkSelected, handleClick } = props;

  return (
    <nav className='d-flex nav-links' >
      <a href={linkSelected} className='px-3 nav-links' onClick={handleClick} >
          About Me
        </a>
      <a href={linkSelected} className='px-3 nav-links' onClick={handleClick}>
          Portfolio
        </a>
      <a href={linkSelected} className='px-3 nav-links' onClick={handleClick}>
          Contact
        </a>
      <a href={linkSelected} className='px-3 nav-links' onClick={handleClick}>
          Resume
        </a>
    </nav>
  )
}

export default Nav;