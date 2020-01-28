import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../containers/Header';
import Main from '../containers/Main';

import './index.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/courses">
          <Main content="courses" />
        </Route>
        <Route path="/users">
          <Main content="users" />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
