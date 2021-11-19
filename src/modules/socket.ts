import { createAction, handleActions } from 'redux-actions';
import { Socket } from 'socket.io-client';

const SET_SOCKET = 'socket/SET_SOCKET' as const;

export const setSocket = createAction(SET_SOCKET, (data: Partial<SocketState>) => data);

type SocketState = {
  socket: Socket | null;
  roomId: Room['id'] | null;
  status: any | null;
  isConnected: boolean;
};

const initialState: SocketState = {
  socket: null,
  roomId: null,
  status: null,
  isConnected: false,
};

export default handleActions<SocketState, any>(
  {
    [SET_SOCKET]: (state: SocketState, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  initialState,
);
