import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Courses manager</h1>
      <div className="header__links">
        <NavLink activeClassName="is-active" to="courses">
          courses
        </NavLink>
        <NavLink activeClassName="is-active" to="users">
          users
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
