import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as roomAPI from '../lib/api/room';

const GET_ROOM_LIST = 'room/GET_ROOM_LIST';

export const getRoomList = createAction(GET_ROOM_LIST, roomAPI.getRoomList);

type MultiRun = {
  isRunning: boolean;
  roomList: Array<Room> | null;
  roomStatus: RoomStatus | null;
  participantRoom: Room | null;
  myRunData: RunData | null;
  othersRunData: OthersRunData | null;
};

const initialState: MultiRun = {
  isRunning: false,
  roomStatus: null,
  roomList: null,
  participantRoom: null,
  myRunData: null,
  othersRunData: null,
};

export default handleActions<MultiRun, any>(
  {
    ...pender({
      type: GET_ROOM_LIST,
      onSuccess: (state, { payload }) => ({
        ...state,
        roomList: payload.roomList,
        participantRoom: payload.participantRoom,
      }),
    }),
  },
  initialState,
);
