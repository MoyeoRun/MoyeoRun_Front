import axios from 'axios';
import qs from 'qs';

export const getSingleRunHistoryByStartEndDays = async (startDay: string,endDay: string ) => {
  const start = new Date(startDay);
  const end = new Date(endDay);
  const query = qs.stringify({ start: start.toISOString(), end: end.toISOString() });
  const { data } = await axios.get<RunHistory>(`http://45.248.73.50:30007/running/list/single?${query}`);
  return data;
};
export const getSingleRunRecordById = async (recordId: string) => {
  const { data } = await axios.get<RunRecord>(`http://45.248.73.50:30007/running/${recordId}`);
  return data;
};



export const getMultiRunHistoryByStartEndDays = async (startDay: string, endDay: string) => {
  console.log(startDay,endDay);
  const start = new Date(startDay);
  const end = new Date(endDay);
  const query = qs.stringify({ start: start.toISOString(), end: end.toISOString() });
  const { data } = await axios.get<RunHistory>(`http://45.248.73.50:30007/running/list/multi?${query}`);
  return data;
};
export const getMultiRunRecordById = async (recordId: string) => {
  const { data } = await axios.get<RunRecord>(`http://45.248.73.50:30007/running/${recordId}`);
  return data;
};





// export const getRunHistoryByWeek = async (startWeekDay: string) => {
//   const start = new Date(startWeekDay);
//   const end = new Date(startWeekDay);
//   end.setDate(end.getDate() + 7);
//   const query = qs.stringify({ start: start.toISOString(), end: end.toISOString() });
//   const { data } = await axios.get<RunHistory>(`http://45.248.73.50:30007/running/list?${query}`);
//   return data;
// };

// export const getRunRecordById = async (recordId: string) => {
//   const { data } = await axios.get<RunRecord>(`http://45.248.73.50:30007/running/${recordId}`);
//   return data;
// };

