import { useNavigation } from '@react-navigation/core';
import {
  LocationAccuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from 'expo-location';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleRunMap from '../components/SingleRun/SingleRunMap';
import { RootState } from '../modules';
import {
  changeSingleRunState,
  concatLocationBuffer,
  sendSingleRunData,
} from '../modules/singleRun';
import { Stopwatch } from 'ts-stopwatch';
import useInterval from '../lib/util/useInterval';

let location: { remove: () => void };
let stopWatch = new Stopwatch();

const SingleRunMapContainer = () => {
  const { accessToken, refreshToken } = useSelector((state: RootState) => state.auth);
  const {
    isRunning,
    runData: buffer,
    runStatus,
    runData,
  } = useSelector((state: RootState) => state.singleRun);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onStartRunning = () => {
    dispatch(changeSingleRunState('isRunning', true));
  };

  const onStopRunning = () => {
    dispatch(changeSingleRunState('isRunning', false));
  };

  const onFinishRunning = () => {
    dispatch(changeSingleRunState('isRunning', false));
    navigation.reset({
      index: 0,
      routes: [{ name: 'Root', state: { routes: [{ name: 'Record' }] } }],
    });
  };

  const startWatchLocation = async () => {
    console.log('시작');
    try {
      await requestForegroundPermissionsAsync();
      location = await watchPositionAsync(
        {
          accuracy: LocationAccuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 0,
        },
        ({ coords: { latitude, longitude, accuracy, speed } }) => {
          dispatch(concatLocationBuffer({ latitude, longitude, time: new Date().toUTCString() }));
          console.log('watch', latitude, longitude, accuracy, speed);
        },
      );
      console.log(location);
    } catch (e) {
      console.log(e);
      console.log('위치정보를 가져올 수 없습니다.');
    }
  };

  const stopWatchLocation = () => {
    console.log('정지');
    try {
      location.remove();
    } catch (e) {
      console.log(e);
    }
  };

  useInterval(
    () => {
      dispatch(changeSingleRunState('runStatus', { ...runStatus, time: stopWatch.getTime() }));
    },
    isRunning ? 500 : null,
  );

  useEffect(() => {
    if (isRunning) {
      stopWatch.start();
      startWatchLocation();
    } else {
      stopWatch.stop();
      stopWatchLocation();
    }
  }, [isRunning]);

  return (
    <SingleRunMap
      isRunning={isRunning}
      buffer={buffer}
      runStatus={runStatus}
      runData={runData}
      onStartRunning={onStartRunning}
      onStopRunning={onStopRunning}
      onFinishRunning={onFinishRunning}
    />
  );
};

export default SingleRunMapContainer;
