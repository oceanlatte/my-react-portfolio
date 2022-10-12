import React from 'react';
import selfie from '../assets/images/portfolio-img-1.JPG';

function About() {
  return (
    <article id='#about'>
      <h2 className='section-title text-center my-3'>
        Hello!👋🏽 My name is <span className="about-title-span">Ocean</span>.
      </h2>
      <div className='d-flex align-items-center justify-content-between'>
        <img src={selfie} style={{ width: "250px" }} alt='selfie of app author' className='avatar rounded-circle ps-3'/>
        <p className='px-5 about-description'>
        I found coding in high school through changing my code on the social media blog site, Tumblr. 
        I always wanted to go to school for coding, but just recently made the leap to start learning! 
        I am so excited to be doing something that excites me and I look forward to a new career.
        <br/>
        <span className="fun-fact-title">Fun fact: </span> 
        <span className='fun-fact'>
          I did a demonstration speech in high school on HTML basics using Tumblr as a pseudo code editor!
        </span>
        </p>
      </div>
    </article>
  )
}

export default About;