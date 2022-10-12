import React, { useState } from 'react';

function Contact() {
  const [formState, setFormState] = useState(
    {name: '', email: '', message: ''}
  );

  // deconstructed from formState
  const { name, email, message } = formState;

  const submitHandler = e => {
    e.preventDefault();
  }
  
  return (
    <div className='ps-3 my-3'>
      <h2 className='section-title'>Contact ⌨️</h2>
      
      <form className='col-11 col-xl-9' onSubmit={submitHandler}>
        <div className='mb-3'>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' className='form-control' defaultValue={name} />
        </div>
        <div className='mb-3'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' className='form-control' defaultValue={email} />
        </div>
        <div className='mb-3'>
          <label htmlFor='message'>Message</label>
          <textarea name='message' rows='5' className='form-control' defaultValue={message} />
        </div>
        <button type='submit' className='rounded-pill px-4 border-0 btn-style'>Submit</button>
      </form>

    </div>
  )
};

export default Contact;