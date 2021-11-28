import axios from 'axios';
import qs from 'qs';

export const getSingleRecordListByStartEndDays = async (startDay: Date, endDay: Date) => {
  const query = qs.stringify({ start: startDay.toISOString(), end: endDay.toISOString() });
  const { data } = await axios.get<SingleRunHistory>(
    `http://45.248.73.50:30007/running/list/single?${query}`,
  );
  return data;
};

export const getMultiRunRecordListByStartEndDays = async (startDay: Date, endDay: Date) => {
  const query = qs.stringify({ start: startDay.toISOString(), end: endDay.toISOString() });
  const { data } = await axios.get<{ multiRoom: Room; rank: number }>(
    `http://45.248.73.50:30007/running/list/multi?${query}`,
  );
  return data;
};

export const getSpecificRunRecordById = async (recordId: string) => {
  const { data } = await axios.get<RunRecord>(`http://45.248.73.50:30007/running/${recordId}`);
  return data;
};

export const getSpecificMultiRunRecordById = async (recordId: string) => {
  const { data } = await axios.get<{ multiRoomWithMember: Room; myRunData: RunRecord }>(
    `http://45.248.73.50:30007/running/multi/${recordId}`,
  );
  return data;
};
