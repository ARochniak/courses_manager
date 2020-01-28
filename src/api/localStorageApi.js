export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('courses_state', serializedState);
  } catch (err) {}
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('courses_state');
    if (serializedState === null) {
      return false;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return false;
  }
};
