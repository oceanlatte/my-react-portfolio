import React, { useState } from 'react';
import { usePopper } from 'react-popper';
import commentIcon from '../assets/images/contact-icons/message-bubble.svg'


function Popover () {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);

return (
  <div>
    {/* Button */}
    <button>
      <img src={commentIcon} alt='chat bubble icon'className='comment-container' />
    </button>
    {/* Tooltip  */}
    <div id='tooltip' role='tooltip'>
      My tooltip popover
    </div>
  </div>

  )
};

export default Popover;
  