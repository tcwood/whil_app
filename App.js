import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import FrontPage from './components/FrontPage';

const App = () => (
  <Provider store={store}>
    <FrontPage />
  </Provider>
);

export default App;

