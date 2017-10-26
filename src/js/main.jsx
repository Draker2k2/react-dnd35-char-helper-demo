import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '../store';
import AppGft from '../components/AppGft';


const Main = () => (
  <Provider store={store}>
    <AppGft />
  </Provider>
);

ReactDOM.render(
  <Main />,
  document.querySelector('#main'),
);
