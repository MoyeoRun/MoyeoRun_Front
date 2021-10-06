import axios from 'axios';

export const kakaoOauth = async (accessToken: string) => {
  const response = await axios.post('http://45.248.73.50:30007/oauth/kakao', { accessToken });
  return response.data;
};

export const naverOauth = async (accessToken: string) => {
  const response = await axios.post('http://45.248.73.50:30007/oauth/naver', { accessToken });
  return response.data;
};

export const googleOauth = async (accessToken: string) => {
  const response = await axios.post('http://45.248.73.50:30007/oauth/google', { accessToken });
  return response.data;
};

export const getRefreshToken = async () => {
  const response = await axios.post('http://45.248.73.50:30007/oauth/refresh');
  return response.data;
};

export const logout = async () => {
  const response = await axios.post('http://45.248.73.50:30007/oauth/logout');
  return response.data;
};
