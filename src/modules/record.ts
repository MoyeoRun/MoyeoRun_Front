import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as recordAPI from '../lib/api/record';

const GET_SINGLE_RECORD_LIST = 'record/GET_SINGLE_RECORD_LIST';
const GET_MULTI_RECORD_LIST = 'record/GET_MULTI_RECORD_LIST';
const GET_SINGLE_RECORD = 'record/GET_SINGLE_RECORD';
const INIT_RECORD_LIST = 'record/INIT_RECORD_LIST';
const INIT_RECORD = 'record/INIT_RECORD';

export const getSingleRecordList = createAction(
  GET_SINGLE_RECORD_LIST,
  recordAPI.getSingleRecordList,
);
export const getMultiRecordList = createAction(GET_MULTI_RECORD_LIST, recordAPI.getMultiRecordList);
export const getSingleRecord = createAction(GET_SINGLE_RECORD, recordAPI.getSingleRecord);
export const initRecordList = createAction(INIT_RECORD_LIST);
export const initRecord = createAction(INIT_RECORD);

type RecordState = {
  singleRecordList: SingleRunHistory | null;
  multiRecordList: MultiRunHistory | null;
  singleRecord: RunRecord | null;
};

const initialState: RecordState = {
  singleRecordList: null,
  multiRecordList: null,
  singleRecord: null,
};

export default handleActions<RecordState, any>(
  {
    [INIT_RECORD_LIST]: (state) => ({
      ...state,
      singleRecordList: initialState.singleRecordList,
      multiRecordList: initialState.multiRecordList,
    }),
    [INIT_RECORD]: (state) => ({
      ...state,
      singleRecord: initialState.singleRecord,
    }),
    ...pender({
      type: GET_SINGLE_RECORD_LIST,
      onSuccess: (state, { payload: singleRecordList }) => ({
        ...state,
        singleRecordList,
      }),
    }),
    ...pender({
      type: GET_MULTI_RECORD_LIST,
      onSuccess: (state, { payload: multiRecordList }) => ({
        ...state,
        multiRecordList,
      }),
    }),
    ...pender({
      type: GET_SINGLE_RECORD,
      onSuccess: (state, { payload: singleRecord }) => ({
        ...state,
        singleRecord,
      }),
    }),
  },
  initialState,
);
