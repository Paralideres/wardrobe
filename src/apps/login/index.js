import 'normalize.css';
import './app/styles/global.css';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './app/store';
import Main from './app/containers/Main';

const store = configureStore();
const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  rootEl);
