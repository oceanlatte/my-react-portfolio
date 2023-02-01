import React, { useState } from 'react';
import { emailValidate } from '../utils/emailValidate';

function Contact() {
  const [formState, setFormState] = useState(
    {name: '', email: '', message: ''}
  );

  const [nameErrMsg, setNameErrMsg] = useState('');
  const [emailErrMsg, setEmailErrMsg] = useState('');
  const [messageErrMsg, setMessageErrMsg] = useState('');

  // deconstructed from formState
  const { name, email, message } = formState;

  const submitHandler = e => {
    e.preventDefault();
  }

  const handleChange = e => {
      if (e.target.name === 'email') {
        const valid = emailValidate(e.target.value);
        if (!valid) {
          setEmailErrMsg('The email address is invalid. Please try again.');
        }
        else {
          setEmailErrMsg('');
        }
      }
      else if (e.target.name === 'name' && !e.target.value.length) {
        setNameErrMsg(`A name is required. Please enter a value.`);
      }
      else if (e.target.name === 'message' && !e.target.value.length)  {
        setMessageErrMsg('A message is required. Please enter a value.');
      }
      else {
        setNameErrMsg(''); 
        setEmailErrMsg('');
        setMessageErrMsg('');
      }
    
    // assigning input from form to key value pairs with spread operator
    // e.target.NAME is grabbing the FORM label name
    if (!nameErrMsg && !emailErrMsg && !messageErrMsg) {
      setFormState({...formState, [e.target.name]: e.target.value })
    }
  };


  
  return (
    <div className='ps-3 my-3' id='contact'>
      <h2 className='section-title'>Contact ⌨️</h2>
      
      <form className='col-11 col-xl-9' onSubmit={submitHandler}>
        <div className='mb-3'>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' className='form-control' aria-describedby='nameErrMsg' defaultValue={name} onBlur={handleChange} />
          {nameErrMsg && (
            <div id='nameErrMsg' className='form-text'>{nameErrMsg}</div>
          )}
        </div>
        <div className='mb-3'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' className='form-control' aria-describedby='emailErrMsg' defaultValue={email} onBlur={handleChange} />
          {emailErrMsg && (
            <div id='emailErrMsg' className='form-text'>{emailErrMsg}</div>
          )}
        </div>
        <div className='mb-3'>
          <label htmlFor='message'>Message</label> 
          <textarea name='message' rows='5' className='form-control' aria-describedby='messageErrMsg' defaultValue={message} onBlur={handleChange} />
          {messageErrMsg && (
            <div id='messageErrMsg' className='form-text'>{messageErrMsg}</div>
          )}
        </div>
        <button type='submit' className='rounded-pill px-4 border-0 btn-style'>Submit</button>
      </form>

    </div>
  )
};

export default Contact;