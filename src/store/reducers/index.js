import { combineReducers } from 'redux';
import resultsPerPage from './resultsPerPage';
import courseReducer from './courseReducer';
import userReducer from './userReducer';

export default combineReducers({
  resultsPerPage,
  courses: courseReducer,
  users: userReducer
});
