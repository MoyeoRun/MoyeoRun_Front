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
import { changeSingleRunState, concatLocationBuffer } from '../modules/singleRun';

let location: { remove: () => void };

const SingleRunMapContainer = () => {
  const { accessToken, refreshToken } = useSelector((state: RootState) => state.auth);
  const { isRunning, buffer, runStatus, runData } = useSelector(
    (state: RootState) => state.singleRun,
  );
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
    navigation.reset({ index: 0, routes: [{ name: 'Running' }] });
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

  useEffect(() => {
    isRunning ? startWatchLocation() : stopWatchLocation();
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
