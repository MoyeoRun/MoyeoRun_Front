import axios from 'axios';
import qs from 'qs';

export const getRunHistoryByWeek = async (startWeekDay: string) => {
  const start = new Date(startWeekDay);
  const end = new Date(startWeekDay);
  end.setDate(end.getDate() + 7);
  const query = qs.stringify({ start: start.toISOString(), end: end.toISOString() });
  const response = await axios.get<RunHistory>(`http://45.248.73.50:30007/running/list?${query}`);
  return response.data;
};
