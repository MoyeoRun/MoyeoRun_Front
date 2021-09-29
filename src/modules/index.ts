import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';

const rootReducer = combineReducers({
  pender: penderReducer,
});

export default rootReducer;
