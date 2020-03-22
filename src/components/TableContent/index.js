import React from 'react';

import './index.css';

// TODO combine curses and users tables business logic in TableContent component

const TableContent = ({ tHead, tBody }) => {
  return (
    <div className="content-table">
      <div className="content-table__head">{tHead}</div>
      <div className="content-table__body">{tBody}</div>
    </div>
  );
};

export default TableContent;
