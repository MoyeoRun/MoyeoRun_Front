import axios from 'axios';

export const finishSingleRun = async (runRecord: Partial<RunRecord>) => {
  const response = await axios.post('http://45.248.73.50:30007/running/single', runRecord);
  return response.data;
};

export const endMultiRun = async (runRecord: Partial<RunRecord>) => {
  const response = await axios.post('http://45.248.73.50:30007/running/single', runRecord);
  return response.data;
};
