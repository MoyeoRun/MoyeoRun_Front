import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MultiRoom from '../../components/multiRun/MultiRoom';
import { RootState } from '../../modules';

const MultiRoomContainer = () => {
  const { accessToken, refreshToken } = useSelector((state: RootState) => state.auth);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  return <MultiRoom />;
};

export default MultiRoomContainer;
