import React from 'react';
import Nav from './Nav';

function Header() {
  return (
    <header className='d-flex justify-content-between align-items-center'>
      <h1 className='mx-3'>
        <a href='/'>Ocean</a>
      </h1>
      <Nav></Nav>
    </header>
  )
}

export default Header;