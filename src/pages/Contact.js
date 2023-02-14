import React from 'react';
import phoneIcon from '../assets/images/contact-icons/phone.svg'
import emailIcon from '../assets/images/contact-icons/email.svg'
import commentIcon from '../assets/images/contact-icons/message-bubble.svg'
import linkedInIcon from '../assets/images/contact-icons/linkedin.svg'

function Contact() {
  // lightbulb for name difference
  // grid of phone, email, linkedin ...twitter? github?
  // add links to each icon
  
  return (
    <main className='ps-3 my-3' id='contact'>
      <h2 className='section-title'>Contact</h2>
        <div>
            <img src={commentIcon} alt='chat bubble icon'className='comment-container'/>
          <div className='d-flex justify-content-around py-4 text-center'>
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