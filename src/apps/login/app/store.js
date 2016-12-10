import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as reducers from './reducers';
import rootSaga from './actions/userSaga';

export function configureStore(history, initialState) {
  const reducer = combineReducers(reducers);
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(
      sagaMiddleware
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
