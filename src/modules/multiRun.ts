import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as runAPI from '../lib/api/run';

const END_MULTI_RUN = 'multiRun/END_MULTI_RUN' as const;
const INIT_MY_RUN_DATA = 'multiRun/INIT_MY_RUN_DATA' as const;
const INIT_OTHERS_RUN_DATA = 'multiRun/INIT_OTHERS_RUN_DATA' as const;
const UPDATE_OTHERS_RUN_DATA = 'multiRun/UPDATE_OTHERS_RUN_DATA' as const;
const INIT_RUN_DATA = 'multiRun/INIT_RUN_DATA' as const;
const UPDATE_TIME = 'multiRun/UPDATE_TIME' as const;
const CHANGE_MULTI_RUN_STATE = 'multiRun/CHANGE_MULTI_RUN_STATE' as const;

export const endMultiRun = createAction(END_MULTI_RUN, runAPI.endMultiRun);
export const initUserRunData = createAction(
  INIT_OTHERS_RUN_DATA,
  (userList: Room['multiRoomMember']) => userList,
);
export const updateUserRunData = createAction(
  UPDATE_OTHERS_RUN_DATA,
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
  room: Room | null;
  startDate: string | null;
  userRunData: UserRunData | null;
};

const initialState: MultiRunState = {
  time: 0,
  room: null,
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
    [INIT_MY_RUN_DATA]: (state, { payload: user }) => ({
      ...state,
      myRunData: {
        user,
        runStatus: { time: 0, distance: 0, pace: 0 },
        runData: [],
      },
    }),
    [INIT_OTHERS_RUN_DATA]: (state, { payload }: { payload: Room['multiRoomMember'] }) => ({
      ...state,
      userRunData: payload.map((item) => ({
        user: item.multiRoomUser,
        runStatus: { time: 0, distance: 0, pace: 0 },
        runData: [],
      })),
    }),
    [UPDATE_OTHERS_RUN_DATA]: (state, { payload: data }) => ({
      ...state,
      userRunData: state.userRunData!.map((item) =>
        item.user.id === data.userId
          ? {
              user: item.user,
              runStatus: data.runStatus,
              runData: item.runData.concat(data.runData),
            }
          : item,
      ),
    }),
    ...pender({
      type: END_MULTI_RUN,
    }),
  },
  initialState,
);
