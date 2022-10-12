import React, { useState } from 'react';
import { emailValidate } from '../utils/emailValidate';

function Contact() {
  const [formState, setFormState] = useState(
    {name: '', email: '', message: ''}
  );

  const [errMsg, setErrMsg] = useState('');

  // deconstructed from formState
  const { name, email, message } = formState;

  const submitHandler = e => {
    e.preventDefault();
  }

  const handleChange = e => {
    if (e.target.name === 'email') {
      const valid = emailValidate(e.target.value);
      if (!valid) {
        setErrMsg('The email address is invalid. Please try again.');
      }
      else {
        setErrMsg('');
      }
    }
    else {
      if (!e.target.value.length) {
        setErrMsg(`${e.target.name} is required. Please enter a value.`);
      }
      else {
        setErrMsg('');
      }
    }
    // assigning input from form to key value pairs with spread operator
    // e.target.NAME is grabbing the FORM label name
    if (!errMsg) {
      setFormState({...formState, [e.target.name]: e.target.value })
    }
  };


  
  return (
    <div className='ps-3 my-3'>
      <h2 className='section-title'>Contact ⌨️</h2>
      
      <form className='col-11 col-xl-9' onSubmit={submitHandler}>
        <div className='mb-3'>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' className='form-control' defaultValue={name} onChange={handleChange} />
        </div>
        <div className='mb-3'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' className='form-control' defaultValue={email} onChange={handleChange} />
        </div>
        <div className='mb-3'>
          <label htmlFor='message'>Message</label>
          <textarea name='message' rows='5' className='form-control' defaultValue={message} onChange={handleChange} />
        </div>
        <button type='submit' className='rounded-pill px-4 border-0 btn-style'>Submit</button>
      </form>

    </div>
  )
};

export default Contact;