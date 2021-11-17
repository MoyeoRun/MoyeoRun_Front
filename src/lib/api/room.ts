import axios from 'axios';

export const getRoomList = async () => {
  const { data } = await axios.get<RoomList>('http://45.248.73.50:30007/room');
  return data;
};

export const createRoom = async () => {
  const { data } = await axios.post<void>('http://45.248.73.50:30007/room');
  return data;
};

export const joinRoom = async (roomId: Room['id']) => {
  const { data } = await axios.post<void>(`http://45.248.73.50:30007/room/join/${roomId}`);
  return data;
};
