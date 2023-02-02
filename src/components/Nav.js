import React, { useState } from 'react';
import '../App.css';

function Nav() {
  const [currentPage, setCurrentPage]  = useState('');
  // const [clickedLink, setClickedLink] = useState(true);

  // Handles getting a single word link 
  function handleClick({ target }) {
    const clickedHeader = target.outerText;
    const pageName = clickedHeader.toLowerCase().trim();

    // if the clicked nav bar name is more than two words, replace the space with a '-' dash
    if (pageName.search(' ')) {
      const newLinkName = pageName.replace(' ', '-');
      console.log(newLinkName);
      // setCurrentPage(newLinkName);
    }
    // setCurrentPage(pageName);
    // console.log(currentPage, 'current page val')
  }

  // const handleClick = ({ target }) => setCurrentPage(target.innerHTML)
  

  return (
    <nav className='d-flex nav-links' onClick={handleClick}>
      <a href='#about-me' className='px-3 nav-links' >
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