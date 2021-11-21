import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import MultiRoom from '../../components/multiRun/MultiRoom';
import { RootState } from '../../modules';
import { getRoomById, joinRoom, exitRoom, deleteRoom } from '../../modules/room';
import { setSocket } from '../../modules/socket';

const MultiRoomContainer = ({ route }: any) => {
  const { roomId } = route.params;
  const { room } = useSelector((state: RootState) => state.room);
  const { user } = useSelector((state: RootState) => state.user);
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleJoinRoom = async () => {
    await dispatch(joinRoom(roomId));
    dispatch(getRoomById(roomId));
    dispatch(setSocket({ roomId: roomId }));
  };

  const handleExitRoom = async () => {
    await dispatch(exitRoom(roomId));
    dispatch(getRoomById(roomId));
    dispatch(setSocket({ roomId: roomId }));
  };

  const handleDeleteRoom = async () => {
    await dispatch(deleteRoom(roomId));
    navigation.reset({
      index: 0,
      routes: [{ name: 'BottomTab', state: { routes: [{ name: 'Running' }] } }],
    });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleRefresh = async () => {
    await dispatch(getRoomById(roomId));
  };

  useEffect(() => {
    dispatch(getRoomById(roomId));
  }, [dispatch, route]);

  return (
    <MultiRoom
      room={room}
      user={user}
      statusbarHeight={insets.top}
      handleJoinRoom={handleJoinRoom}
      handleExitRoom={handleExitRoom}
      handleDeleteRoom={handleDeleteRoom}
      handleGoBack={handleGoBack}
      handleRefresh={handleRefresh}
    />
  );
};

export default MultiRoomContainer;
