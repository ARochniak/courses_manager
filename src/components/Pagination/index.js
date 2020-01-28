import React from 'react';
import { connect } from 'react-redux';
import { setPage } from '../../store/thunk';

import './index.css';

const Pagination = props => {
  const {
    itemsLength,
    resultsPerPage,
    dispatch,
    content,
    coursesPage,
    usersPage
  } = props;
  const page = content === 'courses' ? coursesPage : usersPage;
  const clickHandler = nextPage => {
    dispatch(setPage(content, nextPage));
  };
  const pagesCount = Math.ceil(itemsLength / resultsPerPage);
  const pages = [
    <li key="0">
      <button
        type="button"
        onClick={() => {
          clickHandler(Math.max(1, page - 1));
        }}
      >
        {' '}
      </button>
    </li>
  ];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(
      <li key={i}>
        <button
          className={page === i ? 'page_active' : ''}
          onClick={() => clickHandler(i)}
          type="button"
        >
          {i}
        </button>
      </li>
    );
  }
  pages.push(
    <li key={pagesCount + 1}>
      <button
        type="button"
        onClick={() => {
          clickHandler(Math.min(pagesCount, page + 1));
        }}
      >
        {' '}
      </button>
    </li>
  );
  return <ul className="pagination">{pages}</ul>;
};

const mapStateToProps = state => {
  return {
    resultsPerPage: state.resultsPerPage,
    coursesPage: state.courses.page,
    usersPage: state.users.page
  };
};

export default connect(mapStateToProps)(Pagination);
