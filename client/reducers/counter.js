
const reducer = (state = 0, action) => {
  if (action.type === 'INCREMENT') {
    // do something here
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    // do something else
    return state - 1;
  } else {
    return state;
  }
};

export default reducer;