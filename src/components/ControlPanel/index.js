import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setResultsPerPage, setPage } from '../../store/thunk';
import AddPopup from '../AddPopup';

import './index.css';

const ControlPanel = ({ title, dispatch, courses, users, resultsPerPage }) => {
  const items = title === 'courses' ? courses : users;
  const [helpContent, setHelpContent] = useState(null);
  const searchInput = React.createRef();
  // eslint-disable-next-line consistent-return
  const showSearchedItem = value => {
    const searchedItemIdx = items.findIndex(
      item => item.name.toLowerCase() === value.toLowerCase()
    );
    if (!(searchedItemIdx + 1)) return false;
    const page = Math.ceil((items.length - searchedItemIdx) / resultsPerPage);
    dispatch(setPage(title, page));
  };
  const searchSubmit = e => {
    e.preventDefault();
    showSearchedItem(searchInput.current.value);
  };
  const helpOnClick = e => {
    showSearchedItem(e.currentTarget.textContent);
    setHelpContent(null);
  };
  const inputOnInput = e => {
    if (e.currentTarget.value === '') {
      setHelpContent(null);
      return;
    }
    setHelpContent(
      items
        .filter(item => item.name.includes(e.currentTarget.value))
        .map(itemFiltered => (
          <li key={itemFiltered.id || itemFiltered.code}>
            <button onClick={helpOnClick} type="button">
              {itemFiltered.name}
            </button>
          </li>
        ))
    );
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
              onInput={inputOnInput}
              className={`find__search${
                helpContent ? ' find__search_help' : ''
              }`}
              ref={searchInput}
              placeholder="search by name"
            />
            <ul className="find__help">{helpContent}</ul>
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
