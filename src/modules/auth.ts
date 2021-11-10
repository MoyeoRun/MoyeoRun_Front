import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as authAPI from '../lib/api/auth';

const KAKAO_OAUTH = 'auth/KAKAO_OAUTH' as const;
const GOOGLE_OAUTH = 'auth/GOOGLE_OAUTH' as const;
const NAVER_OAUTH = 'auth/NAVER_OAUTH' as const;
const GET_ACCESS_TOKEN = 'auth/GET_ACCESS_TOKEN' as const;
const SET_TOKEN = 'auth/SET_TOKEN' as const;
const LOGOUT = 'auth/LOGOUT' as const;
const INIT_TOKEN = 'auth/INIT_TOKEN' as const;

export const kakaoOauth = createAction(KAKAO_OAUTH, authAPI.kakaoOauth);
export const googleOauth = createAction(GOOGLE_OAUTH, authAPI.googleOauth);
export const naverOauth = createAction(NAVER_OAUTH, authAPI.naverOauth);
export const getAccessToken = createAction(GET_ACCESS_TOKEN, authAPI.getAccessToken);
export const setToken = createAction(SET_TOKEN, (token: object) => token);
export const logout = createAction(LOGOUT, authAPI.logout);
export const initToken = createAction(INIT_TOKEN);

type AuthAction =
  | ReturnType<typeof kakaoOauth>
  | ReturnType<typeof googleOauth>
  | ReturnType<typeof naverOauth>;

type AuthState = {
  auth: null | object;
  accessToken: null | { token: string; expiresIn: Date };
  refreshToken: null | { token: string; expiresIn: Date };
};

const initialState: AuthState = {
  auth: null,
  accessToken: null,
  refreshToken: null,
};

export default handleActions<AuthState, any>(
  {
    [SET_TOKEN]: (state, { payload }) => ({
      ...state,
      accessToken: payload.accessToken,
      refreshToken: payload.refreshToken,
    }),
    [INIT_TOKEN]: (state) => ({
      ...state,
      accessToken: null,
      refreshToken: null,
    }),
    ...pender({
      type: KAKAO_OAUTH,
      onSuccess: (state, { payload }) => ({
        ...state,
        accessToken: payload.token.accessToken,
        refreshToken: payload.token.refreshToken,
      }),
    }),
    ...pender({
      type: NAVER_OAUTH,
      onSuccess: (state, { payload }) => ({
        ...state,
        accessToken: payload.token.accessToken,
        refreshToken: payload.token.refreshToken,
      }),
    }),
    ...pender({
      type: GOOGLE_OAUTH,
      onSuccess: (state, { payload }) => ({
        ...state,
        accessToken: payload.token.accessToken,
        refreshToken: payload.token.refreshToken,
      }),
    }),
    ...pender({
      type: GET_ACCESS_TOKEN,
      onSuccess: (state, { payload }) => ({
        ...state,
        accessToken: payload.accessToken,
        refreshToken: payload.refreshToken,
      }),
    }),
    ...pender({
      type: LOGOUT,
      onSuccess: (state, { payload }) => ({
        ...state,
        accessToken: null,
        refreshToken: null,
      }),
    }),
  },
  initialState,
);
