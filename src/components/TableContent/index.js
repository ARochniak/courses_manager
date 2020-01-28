import React from 'react';

import './index.css';

// TODO combine curses and users tables business logic in TableContent component

const TableContent = ({ tHead, tBody }) => {
  return (
    <table className="content-table">
      <thead className="content-table__head">
        <tr>{tHead}</tr>
      </thead>
      <tbody className="content-table__body">{tBody}</tbody>
    </table>
  );
};

export default TableContent;
