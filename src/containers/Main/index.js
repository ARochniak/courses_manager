import React from 'react';
import { connect } from 'react-redux';
import ControlPanel from '../../components/ControlPanel';
import CoursesTable from '../../components/CoursesTable';
import UsersTable from '../../components/UsersTable';
import Pagination from '../../components/Pagination';

import './index.css';

const Main = ({ content, users, courses }) => {
  const isCourses = content === 'courses';
  return (
    <main className="main">
      <ControlPanel title={content} />
      {isCourses ? <CoursesTable /> : <UsersTable />}
      <Pagination itemsLength={isCourses ? courses : users} content={content} />
    </main>
  );
};

const mapStateToProps = state => {
  return {
    courses: state.courses.list.length,
    users: state.users.list.length
  };
};

export default connect(mapStateToProps)(Main);
