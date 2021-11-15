import axios from 'axios';

export const kakaoOauth = async (accessToken: string) => {
  const response = await axios.post<Token>('http://45.248.73.50:30007/oauth/kakao', {
    accessToken,
  });
  return response.data;
};

export const naverOauth = async (accessToken: string) => {
  const response = await axios.post<Token>('http://45.248.73.50:30007/oauth/naver', {
    accessToken,
  });
  return response.data;
};

export const googleOauth = async (accessToken: string) => {
  const response = await axios.post<Token>('http://45.248.73.50:30007/oauth/google', {
    accessToken,
  });
  return response.data;
};

export const getAccessToken = async (refreshToken: string) => {
  const response = await axios({
    url: 'http://45.248.73.50:30007/auth/refresh',
    method: 'post',
    headers: {
      Authorization: 'Bearer ' + refreshToken,
    },
  });
  return response.data;
};

export const logout = async () => {
  const response = await axios.post('http://45.248.73.50:30007/auth/logout');
  return response.data;
};

export const setAuthorizeToken = (token: string) => {
  console.log('@@@헤더 업데이트 : ', token);
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
};
