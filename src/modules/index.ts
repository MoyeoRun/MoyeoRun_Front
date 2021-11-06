import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import auth from './auth';
import user from './user';
import singleRun from './singleRun';

const rootReducer = combineReducers({
  auth,
  user,
  singleRun,
  pender: penderReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
