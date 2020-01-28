import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from './store/createStore';
import App from './routing';
import { saveState } from './api/localStorageApi';

import './index.css';

const store = createStore();

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Redirect exact from="/" to="/courses" />
        <App />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
