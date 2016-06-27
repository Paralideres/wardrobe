import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Layout from './containers/Layout';

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

export default function App() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Layout} />
    </Router>
  );
}
