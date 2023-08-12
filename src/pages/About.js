import React from 'react';
import selfie from '../assets/images/about/portfolio-img-1.JPG';

function About() {
  return (
    <article id='about-me'>
      <h2 className='section-title text-center mb-3 mt-5'>
        Hello!👋🏽 My name is <span className="about-title-span">Ocean</span>.
      </h2>
      <div className='d-flex align-items-center justify-content-between'>
        <img src={selfie} style={{ width: "250px" }} alt='selfie of app author' className='avatar rounded-circle ps-3'/>
        <p className='px-5 about-description'>
        I found coding in high school through changing my code on the social media blog site, Tumblr. 
        I always wanted to go to school for coding, but just recently made the leap to start learning! 
        I am so excited to be doing something that excites me and I look forward to a new career.
        <br/>
        <br/>
        I have been in the workforce since the age of 14 and graduated high school at 16.
        I have 12 years of experience in a team setting.
        I'm known for being a top performer and a leader in my roles. I am a fast learning problem solver looking for a team willing
        to work with me on my career development as a web developer. 
        <br/> 
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