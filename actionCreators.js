export function tester(test) {
  return { type: 'TEST_REDUX', test };
}

export function addRedditData(redditData) {
  return { type: 'ADD_REDDIT_DATA', redditData };
}

export function getRedditData() {
  return function (dispatch) {
    fetch('https://www.reddit.com/.json?raw_json=1')
      .then((res) => {
        res.json().then((response) => {
          // Accessing properties further down so only storing array of link objects
          dispatch(addRedditData(response.data.children));
        }).catch((error) => {
          console.log('error with res.json inside actionCreator', error);
        });

        // dispatch(addRedditData(res.data.children));
      })
      .catch((error) => {
        console.error('fetch error', error);
      });
  };
}

export function selectEntry(entryData) {
  return { type: 'SELECT_ENTRY', entryData };
}

