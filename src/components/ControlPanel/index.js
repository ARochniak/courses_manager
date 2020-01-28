import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setResultsPerPage, setPage } from '../../store/thunk';
import AddPopup from '../AddPopup';

import './index.css';

const ControlPanel = ({ title, dispatch, courses, users, resultsPerPage }) => {
  const searchInput = React.createRef();
  const searchSubmit = e => {
    e.preventDefault();
    const items = title === 'courses' ? courses : users;
    const searchedItemIdx = items.findIndex(
      item =>
        item.name.toLowerCase() === searchInput.current.value.toLowerCase()
    );
    if (!(searchedItemIdx + 1)) return false;
    const page = Math.ceil((items.length - searchedItemIdx) / resultsPerPage);
    dispatch(setPage(title, page));

  };
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
          <form className="find" onSubmit={searchSubmit}>
            <input className="find__button" type="submit" value="" />
            <input
              className="find__search"
              ref={searchInput}
              placeholder="search by name"
            />
          </form>
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

const mapStateToProps = state => {
  return {
    courses: state.courses.list,
    users: state.users.list,
    resultsPerPage: state.resultsPerPage
  };
};

export default connect(mapStateToProps)(ControlPanel);
