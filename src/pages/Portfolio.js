import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  return (
    <div className='mt-5 ps-3 portfolio-container' id='portfolio'>
      <h2 className='section-title'>Portfolio</h2>
      <div>
        <Project/>
      </div>
    </div>
  )
}

export default Portfolio;