import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as recordAPI from '../lib/api/record';

// const GET_RUN_HISTORY_BY_WEEK = 'record/GET_RUN_HISTORY_BY_WEEK';
// const GET_RUN_RECORD_BY_ID = 'record/GET_RUN_RECORD_BY_ID';

const GET_SINGLE_RUN_HISTORY_BY_START_END_DAYS = 'record/GET_SINGLE_RUN_HISTORY_BY_START_END_DAYS';
const GET_MULTI_RUN_HISTORY_BY_START_END_DAYS = 'record/GET_MULTI_RUN_HISTORY_BY_START_END_DAYS';
const GET_SINGLE_RUN_RECORD_BY_ID = 'record/GET_SINGLE_RUN_RECORD_BY_ID';
const GET_MULTI_RUN_RECORD_BY_ID = 'record/GET_MULTI_RUN_RECORD_BY_ID';

export const getSingleRunHistoryByStartEndDays = createAction(
  GET_SINGLE_RUN_HISTORY_BY_START_END_DAYS,
  recordAPI.getSingleRunHistoryByStartEndDays,
);
export const getSingleRunRecordById = createAction(GET_SINGLE_RUN_RECORD_BY_ID, recordAPI.getSingleRunRecordById);
export const getMultiRunHistoryByStartEndDays = createAction(
  GET_MULTI_RUN_HISTORY_BY_START_END_DAYS,
  recordAPI.getSingleRunHistoryByStartEndDays,
);
export const getMultiRunRecordById = createAction(GET_MULTI_RUN_RECORD_BY_ID, recordAPI.getMultiRunRecordById);





type RecordState = {
  runHistory: RunHistory | null;
  runRecord: RunRecord | null;
};

const initialState: RecordState = {
  runHistory: null,
  runRecord: null,
};

export default handleActions<RecordState, any>(
  {
    ...pender({
      type: GET_SINGLE_RUN_HISTORY_BY_START_END_DAYS,
      onSuccess: (state, { payload: runHistory }) => ({
        ...state,
        runHistory,
      }),
    }),

    ...pender({
      type: GET_SINGLE_RUN_RECORD_BY_ID,
      onSuccess: (state, { payload: runRecord }) => ({
        ...state,
        runRecord,
      }),
    }),

    ...pender({
      type: GET_MULTI_RUN_HISTORY_BY_START_END_DAYS,
      onSuccess: (state, { payload: runHistory }) => ({
        ...state,
        runHistory,
      }),
    }),
    ...pender({
      type: GET_MULTI_RUN_RECORD_BY_ID,
      onSuccess: (state, { payload: runRecord }) => ({
        ...state,
        runRecord,
      }),
    }),
  },
  initialState,
);
