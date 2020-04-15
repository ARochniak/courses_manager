import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../../store/thunk';

import PopupButton from '../PopupButton';

import './index.scss';

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
          <PopupButton value="NO" clickHandler={hide} />
          <PopupButton value="YES" clickHandler={removeHandler} />
        </div>
      </div>
    </div>
  );
};

export default connect()(RemovePopup);
