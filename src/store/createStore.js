import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import initialState from './initialState';
import { loadState } from '../api/localStorageApi';

const state = loadState() || initialState;

export default function() {
  return createStore(reducer, state, applyMiddleware(thunk));
}
