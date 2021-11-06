import axios from 'axios';

export const sendSigleRunData = async (latitude: number, longitude: number) => {
  const response = await axios.post('http://45.248.73.50:30007/running/single', { latitude, longitude });
  return response.data;
};
