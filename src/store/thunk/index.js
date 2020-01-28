import {
  ADD_COURSE,
  ADD_USER,
  SET_RESULTS_PER_PAGE,
  SET_COURSE_PAGE,
  SET_USER_PAGE,
  EDIT_COURSE,
  EDIT_USER,
  REMOVE_COURSE,
  REMOVE_USER
} from '../types';

export const addItem = (content, name, secondField) => {
  // eslint-disable-next-line consistent-return
  return (dispatch, getState) => {
    switch (content) {
      case 'courses': {
        dispatch({ type: ADD_COURSE, course: { name, code: secondField } });
        break;
      }
      case 'users': {
        dispatch({
          type: ADD_USER,
          user: { name, email: secondField, id: getState().users.nextUserId }
        });
        break;
      }
      default:
        return null;
    }
  };
};

export const setResultsPerPage = resultsPerPage => {
  return dispatch => {
    dispatch({ type: SET_USER_PAGE, page: 1 });
    dispatch({ type: SET_COURSE_PAGE, page: 1 });
    dispatch({ type: SET_RESULTS_PER_PAGE, resultsPerPage });
  };
};

export const setPage = (content, page) => {
  // eslint-disable-next-line consistent-return
  return dispatch => {
    switch (content) {
      case 'courses': {
        dispatch({ type: SET_COURSE_PAGE, page });
        break;
      }
      case 'users': {
        dispatch({ type: SET_USER_PAGE, page });
        break;
      }
      default:
        return null;
    }
  };
};

export const removeItem = (content, id) => {
  // eslint-disable-next-line consistent-return
  return (dispatch, getState) => {
    switch (content) {
      case 'courses': {
        const courses = [...getState().courses.list].filter(course => {
          return course.code !== id;
        });
        dispatch({ type: REMOVE_COURSE, courses });
        break;
      }
      case 'users': {
        const users = [...getState().users.list].filter(user => {
          return user.id !== id;
        });
        dispatch({ type: REMOVE_USER, users });
        break;
      }
      default:
        return null;
    }
  };
};

export const editItem = (content, id, newValue) => {
  // eslint-disable-next-line consistent-return
  return (dispatch, getState) => {
    switch (content) {
      case 'courses': {
        const coursesList = [...getState().courses.list];
        const idx = coursesList.findIndex(course => course.code === id);
        coursesList[idx].name = newValue;
        dispatch({ type: EDIT_COURSE, courses: coursesList });
        break;
      }
      case 'users': {
        const usersList = [...getState().users.list];
        const idx = usersList.findIndex(users => users.id === id);
        usersList[idx].name = newValue;
        dispatch({ type: EDIT_USER, users: usersList });
        break;
      }
      default:
        return null;
    }
  };
};
