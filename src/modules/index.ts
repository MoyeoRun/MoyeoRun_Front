import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import auth from './auth';
import user from './user';

const rootReducer = combineReducers({
  auth,
  user,
  pender: penderReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
