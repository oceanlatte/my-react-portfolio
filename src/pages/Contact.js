import React from 'react';
import phoneIcon from '../assets/images/contact-icons/phone.svg'
import emailIcon from '../assets/images/contact-icons/email.svg'
import commentIcon from '../assets/images/contact-icons/message-bubble.svg'
import linkedInIcon from '../assets/images/contact-icons/linkedin.svg'

function Contact() {
  // link for name difference
  // add links to each icon
  
  return (
    <main className='mt-4 ps-2 mb-2' id='contact'>
      <h2 className='section-title'>Contact</h2>
        <div>
            <img src={commentIcon} alt='chat bubble icon'className='comment-container'/>
          <div className='d-flex justify-content-around py-4 text-center'>
            <div>
              <img src={phoneIcon} alt='phone icon' className='icon-container'/>
              <h3 className='my-3'>
                (608) 852-2565
              </h3>
            </div>
            <div>
              <img src={emailIcon} alt='email envelope icon' className='icon-container'/>
              <h3 className='my-3'>
                osciris.veliz@gmail.com
              </h3>
            </div>
            <div>
              <img src={linkedInIcon} alt='linkedIn logo icon' className='icon-container'/>
              <a href='linkedin.com/in/ocean-veliz-921693239/' className='d-block href-contact my-3'>LinkedIn</a>
            </div>
            
          </div>
        </div>
    </main>
  )
};

export default Contact;