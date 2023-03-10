import React from 'react';
import './sidePopup.css';

const SidePopup = ({active, setActive, children}) => {
  return (
    <div className={active ? 'side-popup active' : 'side-popup'} onClick={() => setActive(false)}>
      <div className="side-popup__content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default SidePopup;