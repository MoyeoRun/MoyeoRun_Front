import axios from 'axios';

export const uploadImage = async (imageData: FormData) => {
  const { data } = await axios.post<any>('http://45.248.73.50:30007/images/upload', imageData);
  console.log('이미지 등록 : ', data);
  return data.location;
};
