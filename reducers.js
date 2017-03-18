const DEFAULT_STATE = {
  test: 'I are zee default statez!',
  redditData: [],
  shouldShowOne: false,
  selectedEntry: [],
};

const setTestOutput = (state, action) => {
  const newState = {};
  Object.assign(newState, state, { test: action.test });
  return newState;
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
    case 'TEST_REDUX':
      return setTestOutput(state, action);
    case 'BACK_TO_ALL_DATA':
      return goBack(state);
    default:
      return state;
  }
};

export default rootReducer;

