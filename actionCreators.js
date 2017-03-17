export function tester(test) {
  return { type: 'TEST_REDUX', test };
}

export function getRedditData() {
  // NOTE: can probably get rid of getState later
  return function (dispatch, getState) {
    fetch('https://www.reddit.com/.json?raw_json=1')
      .then((res) => {
        console.log('response from within action creator', res);
      })
      .catch((error) => {
        console.error('fetch error', error);
      });
  };
}
