export function addRedditData(redditData) {
  return { type: 'ADD_REDDIT_DATA', redditData };
}

export function setRefreshingTrue() {
  return { type: 'SET_REFRESHING_TRUE' };
}

export function setRefreshingFalse() {
  return { type: 'SET_REFRESHING_FALSE' };
}

export function setLoadingFalse() {
  return { type: 'SET_LOADING_FALSE' };
}

export function getRedditData() {
  return function (dispatch) {
    fetch('https://www.reddit.com/.json?raw_json=1')
      .then((res) => {
        res.json().then((response) => {
          // Accessing properties further down so only storing array of link objects
          dispatch(addRedditData(response.data.children));
          dispatch(setLoadingFalse());
          dispatch(setRefreshingFalse());
        }).catch((error) => {
          console.log('error with res.json inside actionCreator', error);
        });
      })
      .catch((error) => {
        console.error('fetch error', error);
      });
  };
}

export function refreshData() {
  return function (dispatch) {
    dispatch(setRefreshingTrue());
    dispatch(getRedditData());
  };
}

export function selectEntry(entryData) {
  return { type: 'SELECT_ENTRY', entryData };
}

export function backToAllData() {
  return { type: 'BACK_TO_ALL_DATA' };
}
