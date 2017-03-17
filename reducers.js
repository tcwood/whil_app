const DEFAULT_STATE = {
  test: 'I are zee default statez!'
}

const setTestOutput = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {test: action.test})
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'TEST_REDUX':
      return setTestOutput(state, action);
    default:
      return state;
  }
}

export default rootReducer

