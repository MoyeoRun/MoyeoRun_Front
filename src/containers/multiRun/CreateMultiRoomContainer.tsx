import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import CreateMultiRoom from '../../components/multiRun/CreateMultiRoom';
import { RootState } from '../../modules';
import { createRoom } from '../../modules/room';

const CreateMultiRoomContainer = () => {
  const { socket } = useSelector((state: RootState) => state.socket);
  const { user } = useSelector((state: RootState) => state.user);
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
    if (user) {
      socket!.emit('join', { userId: user.id }, (err: any) => {
        console.log(err);
      });
    }

    navigation.reset({
      index: 0,
      routes: [{ name: 'BottomTab', state: { routes: [{ name: 'Running' }] } }],
    });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView mode="padding" style={{ flex: 1, backgroundColor: 'white' }} edges={['top']}>
      <CreateMultiRoom handleCreateMultiRoom={handleCreateMultiRoom} handleGoBack={handleGoBack} />
    </SafeAreaView>
  );
};

export default CreateMultiRoomContainer;
