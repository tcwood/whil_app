const DEFAULT_STATE = {
  redditData: [],
  shouldShowOne: false,
  selectedEntry: [],
  refreshing: false,
};

const setRedditData = (state, action) => {
  const newState = {};
  Object.assign(newState, state, { redditData: action.redditData });
  return newState;
};

const setRefreshingTrue = (state) => {
  const newState = {};
  Object.assign(newState, state, { refreshing: true });
  return newState;
};

const setRefreshingFalse = (state) => {
  const newState = {};
  Object.assign(newState, state, { refreshing: false });
  return newState;
};

const selectEntry = (state, action) => {
  const newState = {};
  Object.assign(newState, state, { selectedEntry: [action.entryData], shouldShowOne: true });
  return newState;
};

const goBack = (state) => {
  const newState = {};
  Object.assign(newState, state, { shouldShowOne: false });
  return newState;
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'SET_REFRESHING_TRUE':
      return setRefreshingTrue(state);
    case 'SET_REFRESHING_FALSE':
      return setRefreshingFalse(state);
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

