import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as roomAPI from '../lib/api/room';

const GET_ROOM_LIST = 'room/GET_ROOM_LIST';

export const getRoomList = createAction(GET_ROOM_LIST, roomAPI.getRoomList);

type RoomState = {
  roomList: Array<Room>;
  participantRoom: Room | null;
};

const initialState: RoomState = {
  roomList: [],
  participantRoom: null,
};

export default handleActions<RoomState, any>(
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
