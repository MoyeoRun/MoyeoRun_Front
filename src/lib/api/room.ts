import axios from 'axios';

export const getRoomList = async () => {
  const response = await axios.get<RoomList>('http://45.248.73.50:30007/room');
  return response.data;
};
