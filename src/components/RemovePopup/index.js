import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../../store/thunk';

import './index.css';

const RemovePopup = ({ item, hide, dispatch }) => {
  const removeHandler = () => {
    dispatch(removeItem(item.content, item.id));
    hide();
  };
  return (
    <div className="remove-popup">
      <div className="remove-popup__dialog">
        Are you sure you want to remove
        {` "${item.name}@ `}
        from
        {`${item.content}?`}
        <div className="dialog__buttons">
          <button type="button" onClick={hide}>
            NO
          </button>
          <button type="button" onClick={removeHandler}>
            YES
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect()(RemovePopup);
