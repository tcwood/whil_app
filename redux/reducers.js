const DEFAULT_STATE = {
  redditData: [],
  shouldShowOne: false,
  selectedEntry: [],
  refreshing: false,
  loading: true,
};

const setRedditData = (state, action) => {
  return Object.assign({}, state, { redditData: action.redditData });
};

const setLoadingFalse = (state) => {
  return Object.assign({}, state, { loading: false });
};

const setRefreshingTrue = (state) => {
  return Object.assign({}, state, { refreshing: true });
};

const setRefreshingFalse = (state) => {
  return Object.assign({}, state, { refreshing: false });
};

const selectEntry = (state, action) => {
  return Object.assign({}, state, { selectedEntry: [action.entryData], shouldShowOne: true });
};

const goBack = (state) => {
  return Object.assign({}, state, { shouldShowOne: false });
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'SET_LOADING_FALSE':
      return setLoadingFalse(state);
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

