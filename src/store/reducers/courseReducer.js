import {
  ADD_COURSE,
  REMOVE_COURSE,
  EDIT_COURSE,
  SET_COURSE_PAGE
} from '../types';

export default (state = null, action) => {
  switch (action.type) {
    case ADD_COURSE: {
      return {
        ...state,
        list: [...state.list, action.course]
      };
    }
    case REMOVE_COURSE: {
      return {
        ...state,
        list: action.courses
      };
    }
    case EDIT_COURSE: {
      return {
        ...state,
        list: action.courses
      };
    }
    case SET_COURSE_PAGE: {
      return {
        ...state,
        page: action.page
      };
    }
    default:
      return state;
  }
};
