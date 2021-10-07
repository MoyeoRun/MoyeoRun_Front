import { createStore, applyMiddleware } from 'redux';
import rootReducer from './modules';
import penderMiddleware from 'redux-pender';
import logger from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(penderMiddleware(), logger));

export default store;
