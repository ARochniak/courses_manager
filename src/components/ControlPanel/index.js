import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setResultsPerPage } from '../../store/thunk';
import AddPopup from '../AddPopup';

import './index.css';

const ControlPanel = ({ title, dispatch }) => {
  const [isAddPopup, showAddPopup] = useState(false);
  const addHandler = () => {
    showAddPopup(true);
  };
  const onChangeHandler = e => {
    dispatch(setResultsPerPage(+e.currentTarget.value));
  };
  return (
    <>
      {isAddPopup ? (
        <AddPopup content={title} hide={() => showAddPopup(false)} />
      ) : null}
      <div className="control-panel">
        <div className="control-panel__add-find">
          <button className="add" type="button" onClick={addHandler}>
            +
          </button>
          <div className="find">
            <button className="find__button" type="button">
              {' '}
            </button>
            <input className="find__search" placeholder="search" />
          </div>
        </div>
        <h2 className="control-panel__title">{title.toUpperCase()}</h2>
        <div className="control-panel__select">
          <select className="pages-select" onChange={onChangeHandler}>
            <option>5</option>
            <option>10</option>
            <option>15</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default connect()(ControlPanel);
