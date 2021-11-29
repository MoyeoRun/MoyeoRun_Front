import axios from 'axios';
import qs from 'qs';

export const getSingleRecordList = async (startDay: Date, endDay: Date) => {
  const query = qs.stringify({ start: startDay.toISOString(), end: endDay.toISOString() });
  const { data } = await axios.get<SingleRunHistory>(
    `http://45.248.73.50:30007/running/list/single?${query}`,
  );
  return data;
};

export const getMultiRecordList = async (startDay: Date, endDay: Date) => {
  const query = qs.stringify({ start: startDay.toISOString(), end: endDay.toISOString() });
  const { data } = await axios.get<MultiRunHistory>(
    `http://45.248.73.50:30007/running/list/multi?${query}`,
  );
  return data;
};

export const getSingleRecord = async (recordId: string) => {
  console.log(recordId);
  const { data } = await axios.get<RunRecord>(`http://45.248.73.50:30007/running/${recordId}`);
  return data;
};

export const getmultiRecord = async (recordId: string) => {
  const { data } = await axios.get<RunRecord>(
    `http://45.248.73.50:30007/running/multi/${recordId}`,
  );
  return data;
};
