import axios from 'axios';

export const uploadProfile = async ({ nickName, weight, height }: Partial<User>) => {
  const response = await axios.patch('http://45.248.73.50:30007/user', {
    nickName,
    weight,
    height,
  });
  return response.data;
};

export const getUserData = async () => {
  const response = await axios.get('http://45.248.73.50:30007/user');
  return response.data;
};
