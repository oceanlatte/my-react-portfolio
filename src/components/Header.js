import React from 'react';
import Nav from './Nav';

function Header(props) {
  const { linkSelected, setLinkSelected } = props;
  
  // Handles getting the name of the clicked Navbar link 
  function handleClick({ target }) {
    const clickedHeaderLink = target.outerText;
    const pageName = clickedHeaderLink.toLowerCase().trim();

    // if clicked navbar name is more than two words, replace the space with a dash
    if (pageName.search(' ')) {
      const newLinkName = pageName.replace(' ', '-');
      setLinkSelected('#' + newLinkName);
      console.log(newLinkName)
    } 
    else {
      setLinkSelected('#' + pageName);
      console.log(pageName);
    }

  }

  return (
    <header className='d-flex flex-wrap justify-content-between align-items-center'>
      <h1 className='mx-3'>
        <a href='/' onClick={() => setLinkSelected(null)}>
          <span id='header-name'>Ocean</span></a>
      </h1>
      <Nav
        linkSelected={linkSelected}
        setLinkSelected={setLinkSelected}
        handleClick={handleClick}
      />
    </header>
  )
}

export default Header;