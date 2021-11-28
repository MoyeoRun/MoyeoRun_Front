import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as recordAPI from '../lib/api/record';


const GET_SINGLE_RUN_RECORD_LIST_BY_START_END_DAYS = 'record/GET_SINGLE_RUN_RECORD_LIST_BY_START_END_DAYS';
const GET_MULTI_RECORD_LIST_BY_START_END_DAYS = 'record/GET_MULTI_RECORD_LIST_BY_START_END_DAYS';
const GET_SPECIFIC_RUN_RECORD_BY_ID = 'record/GET_SPECIFIC_RUN_RECORD_BY_ID';
const GET_SPECIFIC_MULTI_RUN_RECORD_BY_ID = 'record/GET_SPECIFIC_MULTI_RUN_RECORD_BY_ID';

export const getSingleRecordListByStartEndDays = createAction(
  GET_SINGLE_RUN_RECORD_LIST_BY_START_END_DAYS,
  recordAPI.getSingleRecordListByStartEndDays,
);
export const getMultiRunRecordListByStartEndDays = createAction(
  GET_MULTI_RECORD_LIST_BY_START_END_DAYS,
  recordAPI.getMultiRunRecordListByStartEndDays,
  );
export const getSpecificRunRecordById = createAction(GET_SPECIFIC_RUN_RECORD_BY_ID, recordAPI.getSpecificRunRecordById);
export const getSpecificMultiRunRecordById = createAction(GET_SPECIFIC_MULTI_RUN_RECORD_BY_ID, recordAPI.getSpecificMultiRunRecordById);





type RecordState = {
  singleRecordList: RunHistory | null;
  multiRecordList: { multiRoom: Room, rank: number } | null;
  specificRecord: RunRecord | null;
  specificMultiRecord : {multiRoomWithMember : Room, myRunData : RunRecord} | null;
};

const initialState: RecordState = {
  singleRecordList: null,
  multiRecordList: null,
  specificRecord: null,
  specificMultiRecord: null,
};

export default handleActions<RecordState, any>(
  {
    ...pender({
      type: GET_SINGLE_RUN_RECORD_LIST_BY_START_END_DAYS,
      onSuccess: (state, { payload: singleRecordList }) => ({
        ...state,
        singleRecordList,
        multiRecordList: null,
      }),
    }),
    ...pender({
      type: GET_MULTI_RECORD_LIST_BY_START_END_DAYS,
      onSuccess: (state, { payload: multiRecordList }) => ({
        ...state,
        singleRecordList: null,
        multiRecordList,
      }),
    }),

    ...pender({
      type: GET_SPECIFIC_RUN_RECORD_BY_ID,
      onSuccess: (state, { payload: specificRunRecord }) => ({
        ...state,
        specificRunRecord,
      }),
    }),
    ...pender({
      type: GET_SPECIFIC_MULTI_RUN_RECORD_BY_ID,
      onSuccess: (state, { payload: specificMultiRecord }) => ({
        ...state,
        specificMultiRecord,
      }),
    }),
  },
  initialState,
);
