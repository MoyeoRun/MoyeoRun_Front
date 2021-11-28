import axios from 'axios';

export const finishSingleRun = async (runRecord: Partial<RunRecord>) => {
  const { data } = await axios.post('http://45.248.73.50:30007/running/single', runRecord);
  return data;
};

export const endMultiRun = async (runRecord: Partial<RunRecord> & { roomId: Room['id'] }) => {
  const { data } = await axios.post('http://45.248.73.50:30007/running/multi', runRecord);
  return data;
};
