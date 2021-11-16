import axios from 'axios';

export const getRunHistoryByWeek = async (notification: NotificationContent) => {
  const { data } = await axios.post('http://45.248.73.50:30007/noti', notification);
  return data;
};
