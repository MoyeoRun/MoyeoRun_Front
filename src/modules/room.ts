import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as roomAPI from '../lib/api/room';

const GET_ROOM_LIST = 'room/GET_ROOM_LIST';
const CREATE_ROOM = 'room/CREATE_ROOM';
const JOIN_ROOM = 'room/JOIN_ROOM';
const CHANGE_ROOM_STATUS = 'room/CHANGE_ROOM_STATUS';

export const getRoomList = createAction(GET_ROOM_LIST, roomAPI.getRoomList);
export const createRoom = createAction(CREATE_ROOM, roomAPI.createRoom);
export const joinRoom = createAction(JOIN_ROOM, roomAPI.createRoom);
export const changeRoomStatus = createAction(
  CHANGE_ROOM_STATUS,
  (roomStatus: RoomStatus) => roomStatus,
);

type RoomState = {
  room: Room | null;
  roomStatus: RoomState | null;
  roomList: Array<Room>;
  participantRoom: Room | null;
};

const initialState: RoomState = {
  room: null,
  roomStatus: null,
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
    ...pender({
      type: CREATE_ROOM,
    }),
    ...pender({
      type: JOIN_ROOM,
    }),
  },
  initialState,
);
