import React from 'react';
import twitterSvg from '../assets/images/twitter-logo-duotone-svgrepo-com.svg';
import gitHubSvg from '../assets/images/github-logo-duotone-svgrepo-com.svg';
import linkedInSvg from '../assets/images/linkedin-logo-duotone-svgrepo-com.svg';

function Footer() {
  return (
    <footer className='py-2 d-flex justify-content-center align-items-center'>
      Find me at: 
      <ul className='ul-footer d-flex'>
        <li className='px-5'>
          <a href='https://twitter.com/oceanlatte222' target='_blank' rel='noreferrer'>
            <img src={twitterSvg} className='svg-container' alt='twitter logo'/>
          </a>
        </li>
        <li className='px-5'>
          <a href='https://github.com/oceanlatte' target='_blank' rel='noreferrer'>
            <img src={gitHubSvg} className='svg-container' alt='gitHub logo'/>
          </a>
        </li>
        <li className='px-5'>
          <a href='https://www.linkedin.com/in/ocean-veliz-921693239/' target='_blank' rel='noreferrer'>
            <img src={linkedInSvg} className='svg-container' alt='linkedIn logo'/>
          </a>
        </li>
      </ul>
    </footer>
  )
};

export default Footer;