import axios from 'axios';

export const uploadImage = async (imageData: FormData) => {
  const { data } = await axios.post<any>('http://45.248.73.50:30007/images/upload', {
    image: imageData,
  });
  return data.location;
};
