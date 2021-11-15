import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleRunPace from '../components/singleRun/SingleRunPace';
import { RootState } from '../modules';
import { changeSingleRunState } from '../modules/singleRun';

const SingleRunPaceContainer = () => {
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
