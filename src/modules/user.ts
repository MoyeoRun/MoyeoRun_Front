import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender/lib/utils';
import * as userAPI from '../lib/api/user';

const UPLOAD_PROFILE = 'user/UPLOAD_PROFILE';
const GET_USER_DATA = 'user/GET_USER_DATA';

export const uploadProfile = createAction(UPLOAD_PROFILE, userAPI.uploadProfile);
export const getUserData = createAction(GET_USER_DATA, userAPI.getUserData);

type UserState = {
  user: User | null;
};

const initialState: UserState = {
  user: null,
};

export default handleActions<UserState, any>(
  {
    ...pender({
      type: GET_USER_DATA,
      onSuccess: (state, { payload }) => ({
        ...state,
        user: payload,
      }),
    }),
    ...pender({
      type: UPLOAD_PROFILE,
      onSuccess: (state, { payload }) => ({
        ...state,
        user: payload.data,
      }),
    }),
  },
  initialState,
);
