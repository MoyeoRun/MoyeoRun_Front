import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender/lib/utils';

const UPLOAD_PROFILE = 'user/UPLOAD_PROFILE';
const UPDATE_PROFILE = 'user/UPDATE_PROFILE';
const GET_USER_DATA = 'user/GET_USER_DATA';

export const uploadProfile = createAction(UPLOAD_PROFILE);
export const updateProfile = createAction(UPDATE_PROFILE);
export const getUserData = createAction(GET_USER_DATA);

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
        user: payload.data,
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
