import React, { useState } from 'react';
import { connect } from 'react-redux';
import getPageItems from '../../utils/getPageItems';
import TableContent from '../TableContent';
import RemovePopup from '../RemovePopup';
import EditPopup from '../EditPopup';

const CoursesTable = ({ courses, page, resultsPerPage }) => {
  const [isRemovePopup, showRemovePopup] = useState(false);
  const [isEditPopup, showEditPopup] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const editHandler = (name, id) => {
    setActiveItem({ content: 'courses', id, name });
    showEditPopup(true);
  };
  const removeHandler = (name, id) => {
    setActiveItem({ content: 'courses', id, name });
    showRemovePopup(true);
  };
  const pageItems = getPageItems(courses, page, resultsPerPage);
  const tHead = (
    <>
      <div>NAME</div>
      <div>CODE</div>
      <div>ACTION</div>
    </>
  );
  const tBody = pageItems.map(course => (
    <div key={course.code}>
      <div>{course.name}</div>
      <div>{course.code}</div>
      <div>
        <div>
          <button
            type="button"
            onClick={() => {
              editHandler(course.name, course.code);
            }}
          >
            {' '}
          </button>
          <button
            type="button"
            onClick={() => {
              removeHandler(course.name, course.code);
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
    courses: state.courses.list,
    page: state.courses.page,
    resultsPerPage: state.resultsPerPage
  };
};
export default connect(mapStateToProps)(CoursesTable);
