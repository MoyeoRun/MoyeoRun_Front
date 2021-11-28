import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RecordDetail from '../../components/record/RecordDetail';
import { RootState } from '../../modules';

const RecordDetailContainer = () => {
  const { accessToken, refreshToken } = useSelector((state: RootState) => state.auth);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  return <RecordDetail />;
};

export default RecordDetailContainer;
