import React, { useState } from 'react';
import { connect } from 'react-redux';
import getPageItems from '../../utils/getPageItems';
import TableContent from '../TableContent';
import RemovePopup from '../RemovePopup';
import EditPopup from '../EditPopup';

const CoursesTable = ({ users, page, resultsPerPage }) => {
  const [isRemovePopup, showRemovePopup] = useState(false);
  const [isEditPopup, showEditPopup] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const editHandler = (name, id) => {
    setActiveItem({ content: 'users', id, name });
    showEditPopup(true);
  };
  const removeHandler = (name, id) => {
    setActiveItem({ content: 'users', id, name });
    showRemovePopup(true);
  };
  const pageItems = getPageItems(users, page, resultsPerPage);
  const tHead = (
    <>
      <div>NAME</div>
      <div>E-MAIL</div>
      <div>ACTION</div>
    </>
  );
  const tBody = pageItems.map(user => (
    <div key={user.id}>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>
        <div>
          <button
            type="button"
            onClick={() => {
              editHandler(user.name, user.id);
            }}
          >
            {' '}
          </button>
          <button
            type="button"
            onClick={() => {
              removeHandler(user.name, user.id);
            }}
          >
            {' '}
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      {isRemovePopup ? (
        <RemovePopup item={activeItem} hide={() => showRemovePopup(false)} />
      ) : null}
      {isEditPopup ? (
        <EditPopup item={activeItem} hide={() => showEditPopup(false)} />
      ) : null}
      <TableContent tHead={tHead} tBody={tBody} />
    </>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users.list,
    page: state.users.page,
    resultsPerPage: state.resultsPerPage
  };
};
export default connect(mapStateToProps)(CoursesTable);
