import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../../store/thunk';

import PopupContainer from '../PopupContainer';
import PopupButton from '../PopupButton';

import './index.scss';

const RemovePopup = ({ item, hide, dispatch }) => {
  const removeHandler = () => {
    dispatch(removeItem(item.content, item.id));
    hide();
  };
  return (
    <PopupContainer>
      <div className="remove-popup">
        Are you sure you want to remove
        {` "${item.name}@ `}
        from
        {`${item.content}?`}
        <div className="remove-popup__buttons">
          <PopupButton value="NO" clickHandler={hide} />
          <PopupButton value="YES" clickHandler={removeHandler} />
        </div>
      </div>
    </PopupContainer>
  );
};

export default connect()(RemovePopup);
