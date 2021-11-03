import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender/lib/utils';
import * as userAPI from '../lib/api/user';

const UPLOAD_BODYINFO = 'user/UPLOAD_BODYINFO';
const GET_USER_DATA = 'user/GET_USER_DATA';

export const uploadBodyInfo = createAction(UPLOAD_BODYINFO, userAPI.uploadBodyInfo);
export const getUserData = createAction(GET_USER_DATA, userAPI.getUserData);

type UserState = {
  user: {
    id: number;
    name: string;
    email: string;
    weight: number;
    height: number;
  } | null;
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
      type: UPLOAD_BODYINFO,
      onSuccess: (state: UserState, { payload }) => ({
        ...state,
        user: payload.data,
      }),
    }),
  },
  initialState,
);
