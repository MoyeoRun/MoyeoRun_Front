import { createStore, applyMiddleware } from 'redux';
import rootReducer from './modules';
import penderMiddleware from 'redux-pender';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(penderMiddleware(), logger)),
);

export default store;
