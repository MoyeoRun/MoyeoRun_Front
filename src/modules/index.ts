import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import auth from './auth';
import user from './user';
import record from './record';
import singleRun from './singleRun';
import multiRun from './multiRun';

const rootReducer = combineReducers({
  auth,
  user,
  record,
  singleRun,
  multiRun,
  pender: penderReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
