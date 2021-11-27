import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as runAPI from '../lib/api/run';

const END_MULTI_RUN = 'multiRun/END_MULTI_RUN' as const;
const INIT_USER_RUN_DATA = 'multiRun/INIT_OTHERS_RUN_DATA' as const;
const UPDATE_USER_RUN_DATA = 'multiRun/UPDATE_OTHERS_RUN_DATA' as const;
const INIT_RUN_DATA = 'multiRun/INIT_RUN_DATA' as const;
const UPDATE_TIME = 'multiRun/UPDATE_TIME' as const;
const CHANGE_MULTI_RUN_STATE = 'multiRun/CHANGE_MULTI_RUN_STATE' as const;

export const endMultiRun = createAction(END_MULTI_RUN, runAPI.endMultiRun);
export const initUserRunData = createAction(
  INIT_USER_RUN_DATA,
  (userList: Room['multiRoomMember']) => userList,
);
export const updateUserRunData = createAction(
  UPDATE_USER_RUN_DATA,
  (data: { userId: User['id']; runData: RunData }) => data,
);
export const updateTime = createAction(UPDATE_TIME, (time: number) => time);
export const initRunData = createAction(INIT_RUN_DATA);
export const changeMultiRunState = createAction(
  CHANGE_MULTI_RUN_STATE,
  (type: keyof MultiRunState, value: any) => ({
    type,
    value,
  }),
);

type MultiRunState = {
  time: number;
  startDate: string | null;
  userRunData: UserRunData | null;
};

const initialState: MultiRunState = {
  time: 0,
  startDate: null,
  userRunData: null,
};

export default handleActions<MultiRunState, any>(
  {
    [INIT_RUN_DATA]: () => initialState,
    [CHANGE_MULTI_RUN_STATE]: (state, { payload }) => ({
      ...state,
      [payload.type]: payload.value,
    }),
    [UPDATE_TIME]: (state, { payload: time }) => ({ ...state, time }),
    [INIT_USER_RUN_DATA]: (state, { payload }: { payload: Room['multiRoomMember'] }) => ({
      ...state,
      userRunData: payload.map((item) => {
        console.log(payload);
        console.log(item);
        return {
          user: item.multiRoomUser,
          runStatus: { time: 0, distance: 0, pace: 0 },
          runData: [],
        };
      }),
    }),
    [UPDATE_USER_RUN_DATA]: (
      state,
      { payload: data }: { payload: { userId: User['id']; runData: RunData } },
    ) => ({
      ...state,
      userRunData: state.userRunData!.map((item) => {
        const lastPoint = data.runData[data.runData.length - 1];
        return item.user.id === data.userId
          ? {
              user: item.user,
              runStatus: {
                time: lastPoint.currentTime,
                distance: lastPoint.currentDistance,
                pace: lastPoint.currentDistance
                  ? lastPoint.currentTime / 60000 / lastPoint.currentDistance
                  : 0,
              },
              runData: item.runData.concat(data.runData),
            }
          : item;
      }),
    }),
    ...pender({
      type: END_MULTI_RUN,
    }),
  },
  initialState,
);
