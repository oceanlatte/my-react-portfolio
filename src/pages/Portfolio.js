import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  return (
    <div className='mt-4 portfolio-container' id='portfolio'>
      <h2 className='section-title ps-3'>Portfolio</h2>
      <div>
        <Project/>
      </div>
    </div>
  )
}

export default Portfolio;