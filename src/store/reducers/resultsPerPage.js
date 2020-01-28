import { SET_RESULTS_PER_PAGE } from '../types';
import initialState from '../initialState';

export default (state = initialState.resultsPerPage, action) => {
  switch (action.type) {
    case SET_RESULTS_PER_PAGE: {
      return action.resultsPerPage;
    }
    default:
      return state;
  }
};
