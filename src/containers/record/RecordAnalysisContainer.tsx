import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RecordAnalysis from '../../components/record/recordAnalysis';
import { RootState } from '../../modules';

const RecordAnalysisContainer = () => {
  const { accessToken, refreshToken } = useSelector((state: RootState) => state.auth);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  return <RecordAnalysis />;
};

export default RecordAnalysisContainer;
