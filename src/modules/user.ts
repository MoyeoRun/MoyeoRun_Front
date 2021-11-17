import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender/lib/utils';
import * as userAPI from '../lib/api/user';

const UPLOAD_PROFILE = 'user/UPLOAD_PROFILE';
const GET_USER_DATA = 'user/GET_USER_DATA';
const CHECK_NICKNAME = 'user/CHECK_NICKNAME';
const SET_STATE = 'user/SET_STATE';

export const uploadProfile = createAction(UPLOAD_PROFILE, userAPI.uploadProfile);
export const getUserData = createAction(GET_USER_DATA, userAPI.getUserData);
export const checkNickName = createAction(CHECK_NICKNAME, userAPI.checkNickName);
export const setState = createAction(SET_STATE, (key: string, value: any) => ({ [key]: value }));

type UserState = {
  user: User | null;
  isUniqueNickName: boolean;
};

const initialState: UserState = {
  user: null,
  isUniqueNickName: false,
};

export default handleActions<UserState, any>(
  {
    [SET_STATE]: (state, { payload }) => ({
      ...state,
      [payload.key]: payload.value,
    }),
    ...pender({
      type: GET_USER_DATA,
      onSuccess: (state, { payload }) => ({
        ...state,
        user: payload,
      }),
    }),
    ...pender({
      type: UPLOAD_PROFILE,
    }),
    ...pender({
      type: CHECK_NICKNAME,
      onSuccess: (state, { payload }) => ({
        ...state,
        isUniqueNickName: payload.isUnique,
      }),
      onFailure: (state, { payload }) => ({
        ...state,
        isUniqueNickName: false,
      }),
    }),
  },
  initialState,
);
