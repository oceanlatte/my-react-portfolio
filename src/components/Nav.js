import React, { useState } from 'react';
import '../App.css';

function Nav() {
  const [currentPage, setCurrentPage]  = useState('/');
  
  // Handles getting the name of the clicked Navbar link 
  function handleClick({ target }) {
    const clickedHeader = target.outerText;
    const pageName = clickedHeader.toLowerCase().trim();

    // if clicked navbar name is more than two words, replace the space with a dash
    if (pageName.search(' ')) {
      const newLinkName = pageName.replace(' ', '-');
      const newHrefName = '#' + newLinkName
      setCurrentPage(newHrefName);
    } else {
      setCurrentPage('#' + pageName)
    }

  }

  return (
    <nav className='d-flex nav-links' >
      <a href={currentPage} className='px-3 nav-links' onClick={handleClick} >
          About Me
        </a>
      <a href={currentPage} className='px-3 nav-links' onClick={handleClick}>
          Portfolio
        </a>
      <a href={currentPage} className='px-3 nav-links' onClick={handleClick}>
          Contact
        </a>
      <a href={currentPage} className='px-3 nav-links' onClick={handleClick}>
          Resume
        </a>
    </nav>
  )
}

export default Nav;