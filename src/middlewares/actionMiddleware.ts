import { setAuthorizeToken } from '../lib/api/auth';
import { getAccessToken, initToken } from '../modules/auth';

const actionMiddleware = async (
  dispatch: any,
  accessToken: any,
  refreshToken: any,
  action: any,
  ...payload: any
): Promise<any> => {
  try {
    console.log('미들웨어 시작', ...payload);
    await dispatch(action(...payload));
  } catch (e) {
    try {
      if (refreshToken) {
        console.log('리프레시 시도', refreshToken, ...payload);
        await dispatch(getAccessToken(refreshToken.token));
        setAuthorizeToken(accessToken.token);
        dispatch(action(...payload));
      } else {
        console.log('리프레시 실패', ...payload);
        dispatch(initToken()); //토큰을 비워줘서 1번에서 감지, 로그인화면으로이동
      }
    } catch {
      console.log('리프레시 실패', ...payload);
      dispatch(initToken()); //토큰을 비워줘서 1번에서 감지, 로그인화면으로이동
    }
  }
};

export default actionMiddleware;
