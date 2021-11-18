import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import CreateMultiRoom from '../../components/multiRun/CreateMultiRoom';
import { createRoom } from '../../modules/room';

const CreateMultiRoomContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleCreateMultiRoom = async ({
    title,
    description,
    startDate,
    targetDistance,
    targetTime,
    limitMember,
    roomImage,
  }: Room) => {
    await dispatch(
      createRoom({
        title,
        description,
        startDate,
        targetDistance,
        targetTime,
        limitMember,
        roomImage,
      }),
    );
    navigation.reset({
      index: 0,
      routes: [{ name: 'BottomTab', state: { routes: [{ name: 'Running' }] } }],
    });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <CreateMultiRoom handleCreateMultiRoom={handleCreateMultiRoom} handleGoBack={handleGoBack} />
  );
};

export default CreateMultiRoomContainer;
