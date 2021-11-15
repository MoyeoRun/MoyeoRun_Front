import axios from 'axios';

export const getRoomList = async () => {
  const response = await axios.get<RoomList>('http://45.248.73.50:30007/room');
  return response.data;
};

export const createRoom = async () => {
  const response = await axios.post<void>('http://45.248.73.50:30007/room');
  return response.data;
};

export const joinRoom = async (roomId: Room['id']) => {
  const response = await axios.post<void>(`http://45.248.73.50:30007/room/join/${roomId}`);
  return response.data;
};
