import React from 'react';
import { io, Socket } from 'socket.io-client';
import { setSocket } from '../modules/socket';
import { NavigationContainerRefWithCurrent } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';

type SocketProviderProps = {
  serverUrl: string;
  children: React.ReactNode;
  navigationRef: NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>;
};

const SocketProvider = ({ children, serverUrl, navigationRef }: SocketProviderProps) => {
  const { user } = useSelector((state: RootState) => state.user);
  const { socket, roomId, isConnected } = useSelector((state: RootState) => state.socket);
  const dispatch = useDispatch();

  const onConnect = () => {
    console.log('connect');
    dispatch(setSocket({ isConnected: true }));
  };

  const onDisconnect = () => {
    console.log('disconnect');
    dispatch(setSocket({ socket: null, roomId: null, isConnected: false }));
  };

  const onWelcome = ({ roomId, status, isReady }: any) => {
    console.log('welcome', roomId, status, isReady);
    dispatch(setSocket({ roomId, status, isReady }));
    if (isReady == true) {
      navigationRef.reset({ index: 0, routes: [{ name: 'ReadyMultiRun' }] });
    }
    if (status == 'Running') {
      navigationRef.reset({ index: 0, routes: [{ name: 'MultiRun' }] });
    }
  };

  const onPrepare = (message: string) => {
    navigationRef.reset({ index: 0, routes: [{ name: 'ReadyMultiRun' }] });
  };

  React.useEffect(() => {
    console.log(navigationRef);
    const socket: Socket = io('http://45.248.73.50:30007/', { transports: ['websocket'] });
    dispatch(setSocket({ socket }));
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('welcome', onWelcome);
    socket.on('prepare', onPrepare);
    return () => {
      socket.off('welcome');
      socket.off('prepare');
    };
  }, [serverUrl]);

  React.useEffect(() => {
    if (user && socket) {
      socket.emit('join', { userId: user.id }, (err: any) => {
        console.log(err);
      });
    }
  }, [user, socket]);

  return <>{children}</>;
};

export default SocketProvider;
