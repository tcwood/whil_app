const DEFAULT_STATE = {
  redditData: [],
  shouldShowOne: false,
  selectedEntry: [],
};

const setRedditData = (state, action) => {
  const newState = {};
  Object.assign(newState, state, { redditData: action.redditData });
  return newState;
};

const selectEntry = (state, action) => {
  const newState = {};
  Object.assign(newState, state, { selectedEntry: [action.entryData], shouldShowOne: true });
  return newState;
};

const goBack = (state) => {
  console.log('inside go back reducer')
  const newState = {};
  Object.assign(newState, state, { shouldShowOne: false });
  return newState;
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'ADD_REDDIT_DATA':
      return setRedditData(state, action);
    case 'SELECT_ENTRY':
      return selectEntry(state, action);
    case 'BACK_TO_ALL_DATA':
      return goBack(state);
    default:
      return state;
  }
};

export default rootReducer;

