"use strict";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];
let appliedMiddlewares = applyMiddleware(...middleware);
  appliedMiddlewares = composeWithDevTools(applyMiddleware(...middleware))

export const configureStore = preloadedState => {
  return createStore(rootReducer,preloadedState,appliedMiddlewares);
};