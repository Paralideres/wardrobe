import 'common/styles/global.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from 'common/utils/store';

export function init(MainComponent, rootReducer) {
  const store = configureStore(window.__INITIAL_STATE__, rootReducer);
  const rootEl = document.getElementById('root');
  return ReactDOM.render(
    <Provider store={store}>
      <MainComponent />
    </Provider>,
  rootEl);
}
