import axios from 'axios';

export const kakaoOauth = async (accessToken: string) => {
  const { data } = await axios.post<Token>('http://45.248.73.50:30007/oauth/kakao', {
    accessToken,
  });
  return data;
};

export const naverOauth = async (accessToken: string) => {
  const { data } = await axios.post<Token>('http://45.248.73.50:30007/oauth/naver', {
    accessToken,
  });
  return data;
};

export const googleOauth = async (accessToken: string) => {
  const { data } = await axios.post<Token>('http://45.248.73.50:30007/oauth/google', {
    accessToken,
  });
  return data;
};

export const refreshAccessToken = async (refreshToken: string) => {
  const { data } = await axios({
    url: 'http://45.248.73.50:30007/auth/refresh',
    method: 'post',
    headers: {
      Authorization: 'Bearer ' + refreshToken,
    },
  });
  return data;
};

export const logout = async () => {
  const { data } = await axios.post('http://45.248.73.50:30007/auth/logout');
  return data;
};

export const setAuthorizeToken = (token: string) => {
  console.log('@@@헤더 업데이트 : ', token);
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
};
