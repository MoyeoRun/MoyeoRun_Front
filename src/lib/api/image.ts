import axios from 'axios';

export const uploadImage = async (data: any) => {
  const response = await axios({
    url: 'http://45.248.73.50:30007/images/upload',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data,
  });
  return response;
};
