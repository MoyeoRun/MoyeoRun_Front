import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MultiRun from '../../components/multiRun/MultiRun';
import { RootState } from '../../modules';
import { endMultiRun } from '../../modules/multiRun';

const MultiRunContainer = () => {
  const { room, roomStatus, myRunData, othersRunData } = useSelector(
    (state: RootState) => state.multiRun,
  );
  const { socket } = useSelector((state: RootState) => state.socket);
  const [point, setPoint] = useState<Point | null>(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleFinishRun = async () => {
    await dispatch(endMultiRun());
  };

  const handleExit = async () => {
    await handleFinishRun();
  };

  useEffect(() => {
    if (socket) {
      socket.on('runBroadCast', () => {});
    }
    return () => {
      socket!.off('runBroadCast');
    };
  }, [socket]);

  useEffect(() => {}, [dispatch]);

  return <MultiRun />;
};

export default MultiRunContainer;
