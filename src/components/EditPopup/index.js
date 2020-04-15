import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { editItem } from '../../store/thunk';

import PopupContainer from '../PopupContainer';
import PopupButton from '../PopupButton';

import './index.scss';

const EditPopup = ({ item, hide, dispatch }) => {
  const textInput = React.createRef();
  const editHandler = () => {
    dispatch(editItem(item.content, item.id, textInput.current.value));
    hide();
  };
  useEffect(() => {
    textInput.current.focus();
  }, []);
  return (
    <PopupContainer>
      <div className="edit-popup">
        New name for
        {` ${item.content.slice(0, -1)}: `}
        <input defaultValue={item.name} ref={textInput} />
        <div className="edit-popup__buttons">
          <PopupButton value="CANCEL" clickHandler={hide} />
          <PopupButton value="YES" clickHandler={editHandler} />
        </div>
      </div>
    </PopupContainer>
  );
};

export default connect()(EditPopup);
