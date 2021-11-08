import axios from 'axios';

export const finishSingleRun = async ({
  type,
  targetDistance,
  targetTime,
  runPace,
  runTime,
  runDistance,
  runData,
}: {
  type: string;
  targetDistance: number | null;
  targetTime: number | null;
  runPace: number;
  runTime: number;
  runDistance: number;
  runData: Array<
    Array<{
      latitude: number;
      longitude: number;
      currentDistance: number;
      currentPace: number;
      currentTime: number;
    }>
  >;
}) => {
  const response = await axios.post('http://45.248.73.50:30007/running/single', {
    type,
    targetDistance,
    targetTime,
    runPace,
    runTime,
    runDistance,
    runData,
  });
  return response.data;
};
