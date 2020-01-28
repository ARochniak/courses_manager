import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from './store/createStore';
import App from './routing';

import './index.css';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/courses" />
        <App />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
