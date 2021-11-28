import axios from 'axios';
import qs from 'qs';

export const getSingleRecordListByStartEndDays = async (startDay: string,endDay: string ) => {
  const start = new Date(startDay);
  const end = new Date(endDay);
  const query = qs.stringify({ start: start.toISOString(), end: end.toISOString() });
  const { data } = await axios.get<RunHistory>(`http://45.248.73.50:30007/running/list/single?${query}`);
  return data;
};


export const getMultiRunRecordListByStartEndDays = async (startDay: string, endDay: string) => {
  console.log(startDay,endDay);
  const start = new Date(startDay);
  const end = new Date(endDay);
  const query = qs.stringify({ start: start.toISOString(), end: end.toISOString() });
  const { data } = await axios.get< { multiRoom: Room, rank: number }>(`http://45.248.73.50:30007/running/list/multi?${query}`);
  console.log("data : ", data);
 
  return data;
};


export const getSpecificRunRecordById = async (recordId: string) => {
  const { data } = await axios.get<RunRecord>(`http://45.248.73.50:30007/running/${recordId}`);
  return data;
};




export const getSpecificMultiRunRecordById = async (recordId: string) => {
  const { data } = await axios.get<{ multiRoomWithMember: Room, myRunData: RunRecord }>(`http://45.248.73.50:30007/running/multi/${recordId}`);
  return data;
};



