import React from 'react';
import phoneIcon from '../assets/images/contact-icons/mobile-svgrepo.svg'
import emailIcon from '../assets/images/contact-icons/envelope-svgrepo.svg'
import commentIcon from '../assets/images/contact-icons/comment-svgrepo.svg'
import linkedInIcon from '../assets/images/contact-icons/linkedin-svgrepo.svg'

function Contact() {
  // lightbulb for name difference
  // grid of phone, email, linkedin ...twitter? github?
  // add links to each icon
  
  return (
    <main className='ps-3 my-3' id='contact'>
      <h2 className='section-title'>Contact</h2>
        <div>
            <img src={commentIcon} alt='chat bubble icon'className='comment-container'/>
          <div className='d-flex justify-content-center'>
            <div>
              <img src={phoneIcon} alt='phone icon' className='icon-container'/>
              <p>(608) 852-2565</p>
            </div>
            <div>
              <img src={emailIcon} alt='email envelope icon' className='icon-container'/>
              <p>osciris.veliz@gmail.com</p>
            </div>
            <div>
              <img src={linkedInIcon} alt='linkedIn logo icon' className='icon-container'/>
              <a href='linkedin.com/in/ocean-veliz-921693239/' className='d-block'>LinkedIn</a>
            </div>
            
          </div>
        </div>
    </main>
  )
};

export default Contact;