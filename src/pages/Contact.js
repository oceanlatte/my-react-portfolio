import React from 'react';
import phoneIcon from '../assets/images/contact-icons/phone.svg'
import emailIcon from '../assets/images/contact-icons/email.svg'
import linkedInIcon from '../assets/images/contact-icons/linkedin.svg'
import githubIcon from '../assets/images/contact-icons/github-blue.svg'

function Contact() {

  return (
    <main className='mt-4 ps-2 mb-2' id='contact'>
      <h2 className='section-title'>Contact</h2>
        <div>
          <div className='d-flex flex-wrap justify-content-around py-4 text-center'>
            {/* Phone Contact Div  */}
            <div>
              <a href='tel:6088522565' className='href-contact'>
                <img src={phoneIcon} alt='phone icon' className='icon-container'/>
              </a>
              <a href='tel:6088522565' className='href-contact'>
                <h3 className='my-3'>
                  (608) 852-2565
                </h3>
              </a>
            </div>
            {/* Email Contact Div */}
            <div>
            <a href='mailto:osciris.veliz@gmail.com' className='href-contact'>
              <img src={emailIcon} alt='email envelope icon' className='icon-container'/>
              </a>
              <a href='mailto:osciris.veliz@gmail.com' className='href-contact'>
                <h3 className='my-3'>
                  osciris.veliz@gmail.com
                </h3>
              </a>
            </div>
            {/* LinkedIn Contact Div */}
            <div>
            <a href='https://www.linkedin.com/in/ocean-veliz-921693239/' target='_blank' className='d-block href-contact my-3'>
              <img src={linkedInIcon} alt='linkedIn logo icon' className='icon-container'/>
              </a>
              <a href='https://www.linkedin.com/in/ocean-veliz-921693239/' target='_blank' className='d-block href-contact my-3'>
                LinkedIn
              </a>
            </div>
            {/* GitHub Contact Div */}
            <div>
            <a href='https://github.com/oceanlatte' target='_blank' className='d-block href-contact my-3'>
              <img src={githubIcon} alt='github logo icon' className='icon-container'/>
              </a>
              <a href='https://github.com/oceanlatte' target='_blank' className='d-block href-contact my-3'>
                GitHub
              </a>
            </div>
            
          </div>
        </div>
    </main>
  )
};

export default Contact;