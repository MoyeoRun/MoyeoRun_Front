import axios from 'axios';

export const uploadImage = async (data: any) => {
  console.log(data);
  const response = await axios({
    url: 'http://45.248.73.50:30007/images/upload',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data,
  });
  console.log('이미지 등록 : ', response);
  return response;
};
