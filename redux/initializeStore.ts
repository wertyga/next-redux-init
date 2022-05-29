import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootState } from 'types/root';

import { rootReducer } from './reducers/rootReducer';

const devEnv = process.env.NODE_ENV === 'development';

const middlewares = [];

export const initializeStore = (preloadedState = {}) =>
  createStore(
    rootReducer,
    preloadedState,
    devEnv
      ? composeWithDevTools(applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares)
  );

let reduxStore;
export const getOrInitializeStore = (initialState?: RootState) => {
  if (typeof window === 'undefined') {
    return initializeStore(initialState);
  }

  if (!reduxStore) {
    reduxStore = initializeStore(initialState);
  }

  return reduxStore;
};
