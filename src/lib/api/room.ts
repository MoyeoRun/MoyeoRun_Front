import axios from 'axios';

export const createRoom = async ({
  title,
  description,
  startDate,
  targetDistance,
  targetTime,
  limitMember,
  roomImage,
}: Partial<Room>) => {
  const { data } = await axios.post<Room>('http://45.248.73.50:30007/multi', {
    title,
    description,
    startDate,
    targetDistance,
    targetTime,
    limitMember,
    roomImage,
  });
  return data;
};

export const joinRoom = async (roomId: Room['id']) => {
  const { data } = await axios.post<Room>(`http://45.248.73.50:30007/multi/${roomId}`);
  return data;
};

export const exitRoom = async (roomId: Room['id']) => {
  const { data } = await axios.patch<Room>(`http://45.248.73.50:30007/multi/${roomId}`);
  return data;
};

export const deleteRoom = async (roomId: Room['id']) => {
  const { data } = await axios.delete<Room>(`http://45.248.73.50:30007/multi/${roomId}`);
  return data;
};

export const getRoomById = async (roomId: Room['id']) => {
  const { data } = await axios.get<Room>(`http://45.248.73.50:30007/multi/${roomId}`);
  return data;
};

export const getRoomList = async () => {
  const { data } = await axios.get<RoomList>('http://45.248.73.50:30007/multi/list');
  return data;
};
