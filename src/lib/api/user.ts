import axios from 'axios';

export const updateBodyInfo = async ({ name, height, weight }: { name?: string; height?: number; weight?: number }) => {
  const response = await axios.patch('http://45.248.73.50:30007/user', { name, height, weight });
  return response.data;
};
