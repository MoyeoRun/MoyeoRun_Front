import React from 'react';
import { io, Socket } from 'socket.io-client';
import store from '../../store';
import { setSocket } from '../../modules/socket';

const useSocket = (serverUrl: string): any => {
  const { user } = store.getState().user;
  const { socket, roomId, isConnected } = store.getState().socket;

  const onConnect = () => {
    store.dispatch(setSocket({ isConnected: true }));
  };

  const onDisconnect = () => {
    store.dispatch(setSocket({ socket: null, roomId: null, isConnected: false }));
  };

  const onWelcome = ({ roomId, status }: { roomId: Room['id'] | null; status: any }) => {
    store.dispatch(setSocket({ roomId, status }));
  };

  React.useEffect(() => {
    const socket: Socket = io('http://45.248.73.50:30007/', { transports: ['websocket'] });
    store.dispatch(setSocket({ socket }));
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('welcome', onWelcome);
  }, [serverUrl, isConnected]);

  React.useEffect(() => {
    if (user && socket) {
      socket.emit('join', { userId: user.id }, (err: any) => {
        console.log(err);
      });
    }
  }, [user]);

  return { roomId, isConnected };
};

export default useSocket;
