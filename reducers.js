const DEFAULT_STATE = {
  test: 'I are zee default statez!',
  redditData: '',
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

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'ADD_REDDIT_DATA':
      return setRedditData(state, action);
    case 'TEST_REDUX':
      return setTestOutput(state, action);
    default:
      return state;
  }
};

export default rootReducer;

