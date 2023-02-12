import React, { useState } from 'react';
import '../App.css';

function Nav(props) {
  const { linkSelected, setLinkSelected } = props;
  
  // Handles getting the name of the clicked Navbar link 
  function handleClick({ target }) {
    const clickedHeaderLink = target.outerText;
    const pageName = clickedHeaderLink.toLowerCase().trim();

    // if clicked navbar name is more than two words, replace the space with a dash
    if (pageName.search(' ')) {
      const newLinkName = pageName.replace(' ', '-');
      setLinkSelected('#' + newLinkName);
    } 
    else {
      setLinkSelected('#' + pageName)
    }

  }

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