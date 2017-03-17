export function tester(test) {
  return { type: 'TEST_REDUX', test };
}

export function addRedditData(redditData) {
  return { type: 'ADD_REDDIT_DATA', redditData };
}

export function getRedditData() {
  // NOTE: can probably get rid of getState later
  return function (dispatch, getState) {
    fetch('https://www.reddit.com/.json?raw_json=1')
      .then((res) => {
        res.json().then((response) => {
          // Accessing properties further down so only storing array of link objects
          dispatch(addRedditData(response.data.children));
          // console.log('response.data for reals', response.data);
        }).catch((error) => {
          console.log('error with res.json', error);
        })

        // dispatch(addRedditData(res.data.children));
      })
      .catch((error) => {
        console.error('fetch error', error);
      });
  };
}
