import axios from 'axios';

export const finishSingleRun = async ({
  type,
  targetDistance,
  targetTime,
  runPace,
  runTime,
  runDistance,
  runData,
  createdAt,
}: {
  type: string;
  targetDistance: number | null;
  targetTime: number | null;
  runPace: number;
  runTime: number;
  runDistance: number;
  runData: Array<
    Array<{
      latitude: number; //현재 위치의 위도
      longitude: number; //현재 위치의 경도
      currentAltitude: number; //현재 위치의 고도
      currentTime: number; //누적 시간
      currentDistance: number; //누적 거리
      currentPace: number; //순간 페이스
    }>
  >;
  createdAt: string | null;
}) => {
  const response = await axios.post('http://45.248.73.50:30007/running/single', {
    type,
    targetDistance,
    targetTime,
    runPace,
    runTime,
    runDistance,
    runData,
    createdAt,
  });
  return response.data;
};
