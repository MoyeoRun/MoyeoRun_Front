import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as roomAPI from '../lib/api/room';

const CREATE_ROOM = 'room/CREATE_ROOM';
const JOIN_ROOM = 'room/JOIN_ROOM';
const EXIT_ROOM = 'room/EXIT_ROOM';
const DELETE_ROOM = 'room/DELETE_ROOM';
const GET_ROOM_BY_ID = 'room/GET_ROOM_BY_ID';
const GET_ROOM_LIST = 'room/GET_ROOM_LIST';
const CHANGE_ROOM_STATUS = 'room/CHANGE_ROOM_STATUS';

export const createRoom = createAction(CREATE_ROOM, roomAPI.createRoom);
export const joinRoom = createAction(JOIN_ROOM, roomAPI.joinRoom);
export const exitRoom = createAction(EXIT_ROOM, roomAPI.exitRoom);
export const deleteRoom = createAction(DELETE_ROOM, roomAPI.deleteRoom);
export const getRoomById = createAction(GET_ROOM_BY_ID, roomAPI.getRoomById);
export const getRoomList = createAction(GET_ROOM_LIST, roomAPI.getRoomList);
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
      type: CREATE_ROOM,
    }),
    ...pender({
      type: JOIN_ROOM,
    }),
    ...pender({
      type: EXIT_ROOM,
    }),
    ...pender({
      type: DELETE_ROOM,
    }),
    ...pender({
      type: GET_ROOM_BY_ID,
    }),
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
