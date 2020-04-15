import React from 'react';

import './index.scss';

const PopupButton = ({ value, clickHandler, type }) => {
  return (
    <button
      className="popup-button"
      type={type || 'button'}
      onClick={clickHandler}
    >
      {value}
    </button>
  );
};

export default PopupButton;
