import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';

const KAKAO_OAUTH = 'auth/KAKAO_OAUTH' as const;
const GOOGLE_OAUTH = 'auth/GOOGLE_OAUTH' as const;
const NAVER_OAUTH = 'auth/NAVER_OAUTH' as const;

export const kakaoOauth = createAction(KAKAO_OAUTH);
export const googleOauth = createAction(GOOGLE_OAUTH);
export const naverOauth = createAction(NAVER_OAUTH);

type AuthAction = ReturnType<typeof kakaoOauth> | ReturnType<typeof googleOauth> | ReturnType<typeof naverOauth>;

type AuthState = {
  auth: null | object;
};

const initialState: AuthState = {
  auth: null,
};

export default handleActions(
  {
    ...pender({
      type: KAKAO_OAUTH,
      onSuccess: (state, { payload }) => {},
    }),
  },
  initialState,
);
