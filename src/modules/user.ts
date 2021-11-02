import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender/lib/utils';
import * as userAPI from '../lib/api/user';

const UPLOAD_PROFILE = 'user/UPLOAD_PROFILE';
const UPDATE_PROFILE = 'user/UPDATE_PROFILE';
const GET_USER_DATA = 'user/GET_USER_DATA';

export const uploadProfile = createAction(UPLOAD_PROFILE, userAPI.uploadBodyInfo);
// export const updateProfile = createAction(UPDATE_PROFILE);
export const getUserData = createAction(GET_USER_DATA, userAPI.getUserData);

type UserState = {
  user: null | object;
};

const initialState: UserState = {
  user: null,
};

export default handleActions(
  {
    ...pender({
      type: GET_USER_DATA,
      onSuccess: (state: UserState, { payload }) => ({
        ...state,
        user: payload,
      }),
    }),
    ...pender({
      type: UPLOAD_PROFILE,
      onSuccess: (state: UserState, { payload }) => ({
        ...state,
        user: payload.data,
      }),
    }),
    ...pender({
      type: UPDATE_PROFILE,
      onSuccess: (state: UserState, { payload }) => ({
        ...state,
        user: payload.data,
      }),
    }),
  },
  initialState,
);
