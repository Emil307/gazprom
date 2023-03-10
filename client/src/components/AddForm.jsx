import React, { useState } from 'react';
import Popup from '../UI/popup/Popup';

const AddForm = ({children, api}) => {
  const [popupActive, setPopupActive] = useState(false);

  function submitForm(event) {
    const formData = new FormData(event.target);

    event.preventDefault();
    fetch(api, {
      method : 'POST',
      body : formData
    })
    .then (response => response.text())
    .then (response => {
      response = JSON.parse(response);
      console.log(response);
    })
  }

  return (
    <>
      <button className="add" onClick={() => setPopupActive(!popupActive)}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.48571 5.48571H0.514286C0.2304 5.48571 0 5.71611 0 6C0 6.28389 0.2304 6.51429 0.514286 6.51429H5.48571V11.4857C5.48571 11.7696 5.71611 12 6 12C6.28389 12 6.51429 11.7696 6.51429 11.4857V6.51429H11.4857C11.7696 6.51429 12 6.28389 12 6C12 5.71611 11.7696 5.48571 11.4857 5.48571H6.51429V0.514286C6.51429 0.2304 6.28389 0 6 0C5.71611 0 5.48571 0.2304 5.48571 0.514286V5.48571Z" fill="#ADADAD"/>
        </svg>
      </button>
      <Popup active={popupActive} setActive={setPopupActive}>
        <form onSubmit={submitForm}>
          {children}
        </form>
      </Popup>
    </>
  )
}

export default AddForm;