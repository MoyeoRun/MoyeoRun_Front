import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateMultiRoom from '../../components/multiRun/CreateMultiRoom';
import { RootState } from '../../modules';

const CreateMultiRoomContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  return <CreateMultiRoom />;
};

export default CreateMultiRoomContainer;
