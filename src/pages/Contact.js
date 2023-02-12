import React from 'react';
import phoneIcon from '../assets/images/contact-icons/mobile-svgrepo.svg'
import emailIcon from '../assets/images/contact-icons/envelope-svgrepo.svg'
import commentIcon from '../assets/images/contact-icons/comment-svgrepo.svg'
import linkedInIcon from '../assets/images/contact-icons/linkedin-svgrepo.svg'

function Contact() {
  // lightbulb for name difference
  // grid of phone, email, linkedin ...twitter? github?
  
  return (
    <div className='ps-3 my-3' id='contact'>
      <h2 className='section-title'>Contact</h2>
        <div>
          <img src={commentIcon}/>
          <ul className='d-flex flex-wrap'>
            <li>
              <img src={phoneIcon}/>
              <p>(608) 852-2565</p>
            </li>
            <li>
              <img src={emailIcon}/>
              <p>osciris.veliz@gmail.com</p>
            </li>
            <li>
              <img src={linkedInIcon}/>
              <p>linkedIn</p>
            </li>
          </ul>
        </div>
    </div>
  )
};

export default Contact;