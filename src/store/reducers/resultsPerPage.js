import { SET_RESULTS_PER_PAGE } from '../types';

export default (state = null, action) => {
  switch (action.type) {
    case SET_RESULTS_PER_PAGE: {
      return action.resultsPerPage;
    }
    default:
      return state;
  }
};
