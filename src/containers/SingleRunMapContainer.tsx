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
  addNewSection,
  changeSingleRunState,
  finishSingleRun,
  initRunData,
  updateRunData,
} from '../modules/singleRun';
import { Stopwatch } from 'ts-stopwatch';
import useInterval from '../lib/util/useInterval';
import { getDistance } from '../lib/util/calcRunData';

let watchLocation: { remove: () => void };
let stopWatch = new Stopwatch();

const SingleRunMapContainer = () => {
  const { accessToken, refreshToken } = useSelector((state: RootState) => state.auth);
  const [currentPoint, setCurrentPoint] =
    useState<{ latitude: number; longitude: number; currentTime: number } | null>(null);
  const { isRunning, section, runStatus, runData } = useSelector(
    (state: RootState) => state.singleRun,
  );
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onStartRunning = () => {
    dispatch(changeSingleRunState('isRunning', true));
  };

  const onStopRunning = () => {
    dispatch(changeSingleRunState('isRunning', false));
    dispatch(addNewSection());
  };

  const onFinishRunning = async () => {
    try {
      await dispatch(
        finishSingleRun({
          type: 'free',
          targetDistance: null,
          targetTime: null,
          runPace: runStatus.pace,
          runTime: runStatus.time,
          runDistance: runStatus.distance,
          runData: runData.filter((item) => item.length !== 0),
        }),
      );
    } catch (e) {
      console.log(e);
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Root', state: { routes: [{ name: 'Record' }] } }],
    });
  };

  const onUpdateRunData = () => {
    if (!currentPoint) return;

    const currentRunData = runData[section];
    const lastPoint =
      currentRunData.length === 0 ? null : currentRunData[currentRunData.length - 1];
    let currentDistance = 0;
    let currentPace = 0;

    if (lastPoint) {
      if (currentPoint.currentTime - lastPoint.currentTime < 1000) return;
      currentDistance = getDistance(
        lastPoint.latitude,
        lastPoint.longitude,
        currentPoint.latitude,
        currentPoint.longitude,
      );
      currentPace =
        currentDistance === 0
          ? 0
          : (currentPoint.currentTime - lastPoint.currentTime) / 60000 / currentDistance;
    }

    console.log('@@@ 위치정보 계산', {
      runData,
      section,
      currentRunData,
      lastPoint,
      currentDistance,
      currentPace,
      currentTime: currentPoint.currentTime,
    });

    dispatch(
      updateRunData({
        latitude: currentPoint.latitude,
        longitude: currentPoint.longitude,
        currentTime: currentPoint.currentTime,
        currentDistance,
        currentPace,
      }),
    );
    dispatch(
      changeSingleRunState('runStatus', {
        time: currentPoint.currentTime,
        distance: runStatus.distance + currentDistance,
        pace:
          runStatus.distance + currentDistance === 0
            ? 0
            : currentPoint.currentTime / 60000 / (runStatus.distance + currentDistance),
      }),
    );
  };

  const startWatchLocation = async () => {
    console.log('시작');
    try {
      await requestForegroundPermissionsAsync();
      watchLocation = await watchPositionAsync(
        {
          accuracy: LocationAccuracy.Highest,
          timeInterval: 1000,
          distanceInterval: 0,
        },
        ({ coords: { latitude, longitude, altitude } }) => {
          console.log('@@@Location Data: ', latitude, longitude, altitude);
          setCurrentPoint({ latitude, longitude, currentTime: stopWatch.getTime() });
        },
      );
    } catch (e) {
      console.log(e);
      console.log('위치정보를 가져올 수 없습니다.');
    }
  };

  const stopWatchLocation = () => {
    console.log('정지');
    try {
      watchLocation.remove();
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
    onUpdateRunData();
  }, [currentPoint]);

  useEffect(() => {
    if (isRunning) {
      stopWatch.start();
      startWatchLocation();
    } else {
      stopWatch.stop();
      stopWatchLocation();
    }
  }, [isRunning]);

  useEffect(() => {
    return () => {
      dispatch(initRunData());
      stopWatch.reset();
    };
  }, []);

  return (
    <SingleRunMap
      isRunning={isRunning}
      runStatus={runStatus}
      section={section}
      runData={runData}
      onStartRunning={onStartRunning}
      onStopRunning={onStopRunning}
      onFinishRunning={onFinishRunning}
    />
  );
};

export default SingleRunMapContainer;
