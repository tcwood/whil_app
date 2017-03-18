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
      })
      .catch((error) => {
        console.error('fetch error', error);
      });
  };
}

export function selectEntry(entryData) {
  return { type: 'SELECT_ENTRY', entryData };
}

export function backToAllData() {
  return { type: 'BACK_TO_ALL_DATA' };
}
