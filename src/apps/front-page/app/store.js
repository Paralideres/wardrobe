import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from './reducers';

export function configureStore(history, initialState) {
  const reducer = combineReducers(reducers);

  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(
      thunkMiddleware
    )
  );

  return store;
}
