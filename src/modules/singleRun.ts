import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender/lib/utils';
import * as runAPI from '../lib/api/run';

const SEND_SINGLE_RUN_DATA = 'singleRun/SEND_SINGLE_RUN_DATA' as const;
const CONCAT_LOCATION_BUFFER = 'singleRun/CONCAT_LOCATION_BUFFER' as const;
const CHANGE_SINGLE_RUN_STATE = 'singleRun/CHANGE_SINGLE_RUN_STATE' as const;

export const uploadProfile = createAction(SEND_SINGLE_RUN_DATA, runAPI.sendSigleRunData);
export const concatLocationBuffer = createAction(
  CONCAT_LOCATION_BUFFER,
  ({ latitude, longitude, time }: { latitude: number; longitude: number; time: string }) => ({
    latitude,
    longitude,
    time,
  }),
);
export const changeSingleRunState = createAction(
  CHANGE_SINGLE_RUN_STATE,
  (type: string, value: any) => ({
    type,
    value,
  }),
);

type SingleRunState = {
  isRunning: boolean;
  buffer: Array<{ latitude: number; longitude: number; time: string }>;
  runStatus: { time: string | null; distance: number; pace: number };
  runData: Array<{ latitude: number; longitude: number }>;
};

const initialState: SingleRunState = {
  isRunning: false,
  buffer: [],
  runStatus: { time: null, distance: 0, pace: 0 },
  runData: [],
};

export default handleActions<SingleRunState, any>(
  {
    [CHANGE_SINGLE_RUN_STATE]: (state, { payload }) => ({
      ...state,
      [payload.type]: payload.value,
    }),
    [CONCAT_LOCATION_BUFFER]: (state, { payload }) => ({
      ...state,
      buffer: state.buffer.concat(payload),
    }),
    ...pender({
      type: SEND_SINGLE_RUN_DATA,
      onSuccess: (state, { payload }) => ({
        ...state,
        runPace: payload.runPace,
        runTime: payload.runTime,
        runDistance: payload.runDistance,
        runData: payload.runDatad,
      }),
    }),
  },
  initialState,
);
