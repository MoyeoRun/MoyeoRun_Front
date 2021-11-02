import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender/lib/utils';
import * as runAPI from '../lib/api/run';

const SEND_SINGLE_RUN_DATA = 'user/SEND_SINGLE_RUN_DATA';

export const uploadProfile = createAction(SEND_SINGLE_RUN_DATA, runAPI.sendSigleRunData);

type SingleRunState = {
  buffer: Array<{ latitude: number; longitude: number }>;
  runPace: number;
  runTime: number;
  runDistance: number;
  runData: Array<{
    currentDistance: number;
    currentPace: number;
    latitude: number;
    longitude: number;
  }>;
};

const initialState: SingleRunState = {
  buffer: [],
  runPace: 0,
  runTime: 0,
  runDistance: 0,
  runData: [],
};

export default handleActions(
  {
    ...pender({
      type: SEND_SINGLE_RUN_DATA,
      onSuccess: (state: SingleRunState, { payload }) => ({
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
