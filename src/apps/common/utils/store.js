import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export function configureStore(initialState, rootReducer) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );

  return store;
}
