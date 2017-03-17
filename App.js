import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import FrontPage from './FrontPage';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <FrontPage />
      </Provider>
    );
  }
}

