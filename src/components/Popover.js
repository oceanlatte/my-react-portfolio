import React, { useState } from 'react';
import { usePopper } from 'react-popper';
import commentIcon from '../assets/images/contact-icons/message-bubble.svg'


function Popover () {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const visibleEl = document.getElementById('popover')

  const { styles, attributes } = usePopper(
    referenceElement, popperElement, {
    modifiers: [{ 
      name: 'arrow', options: { element: arrowElement } 
    }],
  });

  const handleMouseOver = () => {
    visibleEl.setAttribute('style', 'visibility:visible');
    setShowMessage(true);
  }

  const handleMouseLeave = () => {
    visibleEl.setAttribute('style', 'visibility:hidden');
    setShowMessage(false);
  }

return (
  <div className='d-flex'>
    {/* Button */}
      <img 
        src={commentIcon} 
        alt='chat bubble icon'
        className='comment-container' 
        onMouseOver={handleMouseOver} 
        onMouseLeave={handleMouseLeave}
      />
    {/* Tooltip  */}
    <div ref={setPopperElement} style={styles.popper} {...attributes.popper} id='popover'>
        Popper element
        <div ref={setArrowElement} style={styles.arrow} />
    </div>
  </div>

  )
};

export default Popover;
  