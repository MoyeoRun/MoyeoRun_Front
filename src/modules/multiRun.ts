import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as runAPI from '../lib/api/run';

const END_MULTI_RUN = 'multiRun/END_MULTI_RUN' as const;
const INIT_ROOM = 'multiRun/INIT_ROOM' as const;
const INIT_MY_RUN_DATA = 'multiRun/INIT_MY_RUN_DATA' as const;
const INIT_OTHERS_RUN_DATA = 'multiRun/INIT_OTHERS_RUN_DATA' as const;
const CONCAT_MY_RUN_DATA_BY_USER_ID = 'multiRun/CONCAT_RUN_DATA_BY_USER_ID' as const;
const CONCAT_OTHERS_RUN_DATA_BY_USER_ID = 'multiRun/CONCAT_RUN_DATA_BY_USER_ID' as const;

export const endMultiRun = createAction(END_MULTI_RUN, runAPI.endMultiRun);
export const initRoom = createAction(INIT_ROOM, (room: Room) => room);
export const initMyRunData = createAction(INIT_MY_RUN_DATA, (user: Partial<User>) => user);
export const initOthersRunData = createAction(
  INIT_OTHERS_RUN_DATA,
  (userList: Array<Partial<User>>) => userList,
);
export const concatMyRunDataByUserId = createAction(
  CONCAT_MY_RUN_DATA_BY_USER_ID,
  (data: Partial<MyRunData>) => data,
);
export const concatOthersRunDataByUserId = createAction(
  CONCAT_OTHERS_RUN_DATA_BY_USER_ID,
  (data: { userId: User['id']; runData: RunData }) => data,
);

type MultiRunState = {
  room: Room | null;
  roomStatus: RoomStatus | null;
  myRunData: MyRunData | null;
  othersRunData: OthersRunData | null;
};

const initialState: MultiRunState = {
  room: null,
  roomStatus: null,
  myRunData: null,
  othersRunData: null,
};

export default handleActions<MultiRunState, any>(
  {
    [INIT_ROOM]: (state, { payload: room }) => ({
      ...state,
      room,
    }),
    [INIT_MY_RUN_DATA]: (state, { payload: user }) => ({
      ...state,
      myRunData: {
        user,
        runStatus: { time: 0, distance: 0, pace: 0 },
        runData: [],
      },
    }),
    [INIT_OTHERS_RUN_DATA]: (state, { payload: userList }) => ({
      ...state,
      othersRunData: userList.map((item: Partial<User>) => ({
        user: item,
        runStatus: { time: 0, distance: 0, pace: 0 },
        runData: [],
      })),
    }),
    [CONCAT_MY_RUN_DATA_BY_USER_ID]: (state, { payload: data }) => ({
      ...state,
      myRunData: {
        user: state.myRunData!.user,
        runStatus: data.runStatus,
        runData: state.myRunData!.runData.concat(data.runData),
      },
    }),
    [CONCAT_OTHERS_RUN_DATA_BY_USER_ID]: (state, { payload: data }) => ({
      ...state,
      othersRunData: state.othersRunData!.map((item) =>
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
