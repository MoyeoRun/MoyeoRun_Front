import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MultiRoom from '../../components/multiRun/MultiRoom';
import { RootState } from '../../modules';
import { getRoomById, joinRoom, exitRoom, deleteRoom } from '../../modules/room';

const MultiRoomContainer = ({ roomId }: { roomId: Room['id'] }) => {
  const { room } = useSelector((state: RootState) => state.room);
  const { user } = useSelector((state: RootState) => state.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleJoinRoom = async () => {
    await dispatch(joinRoom(roomId));
    dispatch(getRoomById(roomId));
  };

  const handleExitRoom = async () => {
    await dispatch(exitRoom(roomId));
    dispatch(getRoomById(roomId));
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

  useEffect(() => {
    dispatch(getRoomById(roomId));
  }, [dispatch]);

  return (
    <MultiRoom
      room={room}
      user={user}
      handleJoinRoom={handleJoinRoom}
      handleExitRoom={handleExitRoom}
      handleDeleteRoom={handleDeleteRoom}
      handleGoBack={handleGoBack}
    />
  );
};

export default MultiRoomContainer;
