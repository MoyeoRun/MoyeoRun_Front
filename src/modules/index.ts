import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import auth from './auth';
import user from './user';
import room from './room';
import image from './image';
import record from './record';
import socket from './socket';
import singleRun from './singleRun';
import multiRun from './multiRun';

const rootReducer = combineReducers({
  auth,
  user,
  room,
  image,
  record,
  singleRun,
  multiRun,
  socket,
  pender: penderReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
