import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender/lib/utils';
import * as userAPI from '../lib/api/user';

const UPLOAD_PROFILE = 'user/UPLOAD_PROFILE';
const GET_USER_DATA = 'user/GET_USER_DATA';
const CHECK_NICKNAME = 'user/CHECK_NICKNAME';

export const uploadProfile = createAction(UPLOAD_PROFILE, userAPI.uploadProfile);
export const getUserData = createAction(GET_USER_DATA, userAPI.getUserData);
export const checkNickname = createAction(CHECK_NICKNAME, userAPI.checkNickname);

type UserState = {
  user: User | null;
  isUniqueNickname: boolean | null;
};

const initialState: UserState = {
  user: null,
  isUniqueNickname: null,
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
    ...pender({
      type: CHECK_NICKNAME,
      onSuccess: (state, { payload }) => ({
        ...state,
        isUniqueNickname: payload.isUnique,
        user: payload.isUnique && { ...state.user, nickName: payload.nickName },
      }),
    }),
  },
  initialState,
);
