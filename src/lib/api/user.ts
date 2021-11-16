import axios from 'axios';

export const uploadProfile = async (userData: User) => {
  const { data } = await axios.patch<Partial<User>>('http://45.248.73.50:30007/user', userData);
  return data;
};

export const getUserData = async () => {
  const { data } = await axios.get<User>('http://45.248.73.50:30007/user');
  return data;
};

export const checkNickname = async (nickName: string) => {
  const { data } = await axios.get<{ isUnique: boolean; nickName: string }>(
    `http://45.248.73.50:30007/user/${nickName}`,
  );
  return data;
};
