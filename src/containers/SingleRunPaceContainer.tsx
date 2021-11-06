import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleRunPace from '../components/SingleRun/SingleRunPace';
import actionMiddleware from '../middlewares/actionMiddleware';
import { RootState } from '../modules';
import { changeSingleRunState } from '../modules/singleRun';

const SingleRunPaceContainer = () => {
  const { accessToken, refreshToken } = useSelector((state: RootState) => state.auth);
  const { isRunning, runStatus } = useSelector((state: RootState) => state.singleRun);
  const dispatch = useDispatch();

  const onStartRunning = () => {
    dispatch(changeSingleRunState('isRunning', true));
  };

  const onStopRunning = () => {
    dispatch(changeSingleRunState('isRunning', false));
  };

  return (
    <SingleRunPace
      isRunning={isRunning}
      runStatus={runStatus}
      onStartRunning={onStartRunning}
      onStopRunning={onStopRunning}
    />
  );
};

export default SingleRunPaceContainer;
