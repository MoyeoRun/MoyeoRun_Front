import axios from 'axios';

export const uploadBodyInfo = async ({
  name,
  height,
  weight,
}: {
  name?: string;
  height?: number;
  weight?: number;
}) => {
  const response = await axios.patch('http://45.248.73.50:30007/user', { name, height, weight });
  return response.data;
};

export const getUserData = async () => {
  const response = await axios.get('http://45.248.73.50:30007/user');
  return response.data;
};
