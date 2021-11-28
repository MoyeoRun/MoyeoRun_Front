import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as recordAPI from '../lib/api/record';

const GET_SINGLE_RUN_RECORD_LIST_BY_START_END_DAYS =
  'record/GET_SINGLE_RUN_RECORD_LIST_BY_START_END_DAYS';
const GET_MULTI_RECORD_LIST_BY_START_END_DAYS = 'record/GET_MULTI_RECORD_LIST_BY_START_END_DAYS';

export const getSingleRecordListByStartEndDays = createAction(
  GET_SINGLE_RUN_RECORD_LIST_BY_START_END_DAYS,
  recordAPI.getSingleRecordListByStartEndDays,
);
export const getMultiRunRecordListByStartEndDays = createAction(
  GET_MULTI_RECORD_LIST_BY_START_END_DAYS,
  recordAPI.getMultiRunRecordListByStartEndDays,
);

type RecordState = {
  singleRecordList: SingleRunHistory | null;
  multiRecordList: MultiRunHistory | null;
};

const initialState: RecordState = {
  singleRecordList: null,
  multiRecordList: null,
};

export default handleActions<RecordState, any>(
  {
    ...pender({
      type: GET_SINGLE_RUN_RECORD_LIST_BY_START_END_DAYS,
      onSuccess: (state, { payload: singleRecordList }) => ({
        ...state,
        singleRecordList,
      }),
    }),
    ...pender({
      type: GET_MULTI_RECORD_LIST_BY_START_END_DAYS,
      onSuccess: (state, { payload: multiRecordList }) => ({
        ...state,
        multiRecordList,
      }),
    }),
  },
  initialState,
);
