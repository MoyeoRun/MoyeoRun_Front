import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as authAPI from '../lib/api/auth';

const KAKAO_OAUTH = 'auth/KAKAO_OAUTH' as const;
const GOOGLE_OAUTH = 'auth/GOOGLE_OAUTH' as const;
const NAVER_OAUTH = 'auth/NAVER_OAUTH' as const;

export const kakaoOauth = createAction(KAKAO_OAUTH, authAPI.kakaoOauth);
export const googleOauth = createAction(GOOGLE_OAUTH, authAPI.googleOauth);
export const naverOauth = createAction(NAVER_OAUTH, authAPI.naverOauth);

type AuthAction = ReturnType<typeof kakaoOauth> | ReturnType<typeof googleOauth> | ReturnType<typeof naverOauth>;

type AuthState = {
  auth: null | object;
  accessToken: null | string;
  refreshToken: null | string;
};

const initialState: AuthState = {
  auth: null,
  accessToken: null,
  refreshToken: null,
};

export default handleActions(
  {
    ...pender({
      type: KAKAO_OAUTH,
      onSuccess: (state: AuthState, { payload }) => ({
        ...state,
        accessToken: payload.token.accessToken,
        refreshToken: payload.token.refreshToken,
      }),
    }),
  },
  initialState,
);
