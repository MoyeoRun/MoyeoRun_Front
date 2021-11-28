import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleRecordDetail from '../../components/record/SIngleRecordDetail';
import { RootState } from '../../modules';

const MultiRecordDetailContainer = () => {
  const { accessToken, refreshToken } = useSelector((state: RootState) => state.auth);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  return <SingleRecordDetail />;
};

export default MultiRecordDetailContainer;
