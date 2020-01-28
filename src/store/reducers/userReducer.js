import { ADD_USER, REMOVE_USER, EDIT_USER, SET_USER_PAGE } from '../types';
import initialState from '../initialState';

export default (state = null, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        list: [...state.list, action.user],
        nextUserId: state.nextUserId + 1
      };
    }
    case REMOVE_USER: {
      return {
        ...state,
        list: action.users
      };
    }
    case EDIT_USER: {
      return {
        ...state,
        list: action.users
      };
    }
    case SET_USER_PAGE: {
      return {
        ...state,
        page: action.page
      };
    }
    default:
      return state;
  }
};
