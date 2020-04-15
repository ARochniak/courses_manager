import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../store/thunk';

import PopupContainer from '../PopupContainer';
import PopupButton from '../PopupButton';

import './index.scss';

const AddPopup = ({ content, hide, dispatch, codes }) => {
  const nameInput = React.createRef();
  const secondInput = React.createRef();
  const addHandler = e => {
    e.preventDefault();
    if (content === 'courses' && codes.includes(secondInput.current.value)) {
      // TODO add validation style
      secondInput.current.focus();
      return;
    }
    const name = nameInput.current.value;
    const secondField = secondInput.current.value;
    dispatch(addItem(content, name, secondField));
    hide();
  };
  useEffect(() => {
    nameInput.current.focus();
  }, []);
  const secondField =
    content === 'courses' ? (
      <input
        placeholder="CODE"
        required
        ref={secondInput}
        minLength="6"
        maxLength="6"
      />
    ) : (
      <input
        type="email"
        placeholder="EMAIL"
        ref={secondInput}
        required
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      />
    );
  return (
    <PopupContainer>
      <form className="add-popup" onSubmit={addHandler}>
        <input placeholder="NAME" ref={nameInput} required />
        <br />
        {secondField}
        <div className="add-popup__buttons">
          <PopupButton value="CANCEL" clickHandler={hide} />
          <PopupButton value={`ADD ${content.slice(0, -1)}`} type="submit" />
        </div>
      </form>
    </PopupContainer>
  );
};

const mapStateToProps = state => {
  return {
    codes: state.courses.list.map(course => course.code)
  };
};
export default connect(mapStateToProps)(AddPopup);
