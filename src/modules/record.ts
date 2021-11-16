import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as recordAPI from '../lib/api/record';

const GET_RUN_HISTORY_BY_WEEK = 'record/GET_RUN_HISTORY_BY_WEEK';
const GET_RUN_RECORD_BY_ID = 'record/GET_RUN_RECORD_BY_ID';

export const getRunHistoryByWeek = createAction(
  GET_RUN_HISTORY_BY_WEEK,
  recordAPI.getRunHistoryByWeek,
);
export const getRunRecordById = createAction(GET_RUN_RECORD_BY_ID, recordAPI.getRunRecordById);

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
      type: GET_RUN_HISTORY_BY_WEEK,
      onSuccess: (state, { payload: runHistory }) => ({
        ...state,
        runHistory,
      }),
    }),
    ...pender({
      type: GET_RUN_RECORD_BY_ID,
      onSuccess: (state, { payload: runRecord }) => ({
        ...state,
        runRecord,
      }),
    }),
  },
  initialState,
);
