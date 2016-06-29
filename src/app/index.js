import 'normalize.css';
import './styles/global.css';

import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, useRouterHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import useScroll from 'scroll-behavior/lib/useSimpleScroll';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';

import { configureStore } from './store';
import Layout from './containers/Layout/Layout';
import Users from './containers/Users';
import Teams from './containers/Teams';
import Resources from './containers/Resources';

const state = window.__initialState__ || undefined;
const store = configureStore(browserHistory, state);
const createScrollHistory = useScroll(createBrowserHistory);
const appHistory = useRouterHistory(createScrollHistory)();
const history = syncHistoryWithStore(appHistory, store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Layout}>
            <IndexRoute component={Users} />
            <Route path="/teams" component={Teams} />
            <Route path="/resources" component={Resources} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default App;
