import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as recordAPI from '../lib/api/record';

const GET_RUN_HISTORY_BY_WEEK = 'record/GET_RUN_HISTORY_BY_WEEK';

export const getRunHistoryByWeek = createAction(
  GET_RUN_HISTORY_BY_WEEK,
  recordAPI.getRunHistoryByWeek,
);

type MultiRun = {
  runHistory: RunHistory | null;
};

const initialState: MultiRun = {
  runHistory: null,
};

export default handleActions<MultiRun, any>(
  {
    ...pender({
      type: GET_RUN_HISTORY_BY_WEEK,
      onSuccess: (state, { payload }) => ({
        ...state,
        runHistory: payload,
      }),
    }),
  },
  initialState,
);
