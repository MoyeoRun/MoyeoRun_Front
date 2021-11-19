import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender/lib/utils';
import * as runAPI from '../lib/api/run';

const UPDATE_RUN_DATA = 'singleRun/UPDATE_RUN_DATA' as const;
const ADD_NEW_SECTION = 'singleRun/ADD_NEW_SECTION' as const;
const CHANGE_SINGLE_RUN_STATE = 'singleRun/CHANGE_SINGLE_RUN_STATE' as const;
const FINISH_SINGLE_RUN = 'singleRun/FINISH_SINGLE_RUN' as const;
const INIT_RUN_DATA = 'singleRun/INIT_RUN_DATA' as const;
const SET_TARGET = 'singleRun/SET_TARGET' as const;

export const finishSingleRun = createAction(FINISH_SINGLE_RUN, runAPI.finishSingleRun);
export const updateRunData = createAction(UPDATE_RUN_DATA, (data: Point) => data);
export const addNewSection = createAction(ADD_NEW_SECTION);
export const setTarget = createAction(
  SET_TARGET,
  ({
    targetTime,
    targetDistance,
  }: {
    targetTime: number | null;
    targetDistance: number | null;
  }) => ({ targetTime, targetDistance }),
);
export const changeSingleRunState = createAction(
  CHANGE_SINGLE_RUN_STATE,
  (type: keyof SingleRunState, value: any) => ({
    type,
    value,
  }),
);
export const initRunData = createAction(INIT_RUN_DATA);

type SingleRunState = {
  section: number;
  isRunning: boolean;
  startDate: string | null;
  runStatus: RunStatus;
  runData: Array<RunData>;
  targetTime: number | null;
  targetDistance: number | null;
};

const initialState: SingleRunState = {
  isRunning: false,
  section: 0,
  runStatus: { time: 0, distance: 0, pace: 0 },
  runData: [[]],
  startDate: null,
  targetTime: null,
  targetDistance: null,
};

export default handleActions<SingleRunState, any>(
  {
    [SET_TARGET]: (state, { payload }) => ({
      ...state,
      targetTime: payload.targetTime,
      targetDistance: payload.targetDistance,
    }),
    [CHANGE_SINGLE_RUN_STATE]: (state, { payload }) => ({
      ...state,
      [payload.type]: payload.value,
    }),
    [ADD_NEW_SECTION]: (state) => ({
      ...state,
      section: state.section + 1,
      runData: [...state.runData, []],
    }),
    [UPDATE_RUN_DATA]: (state, { payload }: { payload: Point }) => ({
      ...state,
      runStatus: state.isRunning
        ? {
            time: payload.currentTime,
            distance: state.runStatus.distance + payload.currentDistance,
            pace: payload.currentDistance
              ? payload.currentTime / 1000 / 60 / payload.currentDistance
              : 0,
          }
        : state.runStatus,
      runData: state.isRunning
        ? [
            ...state.runData.filter((x, i) => i != state.section),
            state.runData[state.section].concat({
              ...payload,
              currentDistance: state.runStatus.distance + payload.currentDistance,
            }),
          ]
        : state.runData,
    }),
    [INIT_RUN_DATA]: (state) => initialState,
    ...pender({
      type: FINISH_SINGLE_RUN,
    }),
  },
  initialState,
);
