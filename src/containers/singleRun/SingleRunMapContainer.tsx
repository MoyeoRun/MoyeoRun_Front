import { useNavigation } from '@react-navigation/core';
import {
  LocationAccuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from 'expo-location';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleRunMap from '../../components/singleRun/SingleRunMap';
import { RootState } from '../../modules';
import {
  addNewSection,
  changeSingleRunState,
  finishSingleRun,
  initRunData,
  updateRunData,
} from '../../modules/singleRun';
import { Stopwatch } from 'ts-stopwatch';
import useInterval from '../../lib/hooks/useInterval';
import { getDistance } from '../../lib/util/calcRunData';
import { speak } from 'expo-speech';
import { getDistanceString, getPaceString } from '../../lib/util/strFormat';

let watchLocation: { remove: () => void };
let stopWatch = new Stopwatch();
let distanceInterval: number = 0.5;

const SingleRunMapContainer = () => {
  const [currentPoint, setCurrentPoint] = useState<Point | null>(null);
  const { isRunning, section, runStatus, runData, startDate } = useSelector(
    (state: RootState) => state.singleRun,
  );
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onStartRunning = () => {
    dispatch(changeSingleRunState('isRunning', true));
    if (!startDate) {
      dispatch(changeSingleRunState('startDate', new Date().toISOString()));
      speak('안녕하세요, 오늘도 즐거운 러닝 하세요');
    }
  };

  const onStopRunning = () => {
    dispatch(changeSingleRunState('isRunning', false));
    if (runData[section].length !== 0) dispatch(addNewSection());
  };

  const onFinishRunning = async () => {
    const filterRunData = runData.filter((item) => item.length !== 0);
    console.log(filterRunData);
    if (!startDate) console.log('@@@시작 시간 오류 ' + startDate);
    await dispatch(
      finishSingleRun({
        type: 'free',
        targetDistance: null,
        targetTime: null,
        runPace: runStatus.pace,
        runTime: runStatus.time,
        runDistance: runStatus.distance,
        runData: filterRunData.length === 0 ? [[]] : filterRunData,
        createdAt: startDate || new Date().toISOString(),
      }),
    );
    navigation.reset({
      index: 0,
      routes: [{ name: 'BottomTab', state: { routes: [{ name: 'Record' }] } }],
    });
  };

  const onUpdateRunData = () => {
    if (!currentPoint || !isRunning) return;

    const currentRunData = runData[section];
    const lastPoint =
      currentRunData.length === 0 ? null : currentRunData[currentRunData.length - 1];
    let currentDistance = runStatus.distance;
    let momentPace =
      section > 0 ? runData[section - 1][runData[section - 1].length - 1].momentPace : 0;

    if (lastPoint) {
      if (currentPoint.currentTime - lastPoint.currentTime < 1000) return;
      currentDistance = getDistance(
        lastPoint.latitude,
        lastPoint.longitude,
        currentPoint.latitude,
        currentPoint.longitude,
      );
      momentPace =
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
      momentPace,
      currentTime: currentPoint.currentTime,
    });

    if (runStatus.distance + currentDistance > distanceInterval) {
      distanceInterval += distanceInterval;
      speak(
        `현재 페이스는 ${getPaceString(runStatus.pace)}, 달린 거리는 ${getDistanceString(
          runStatus.distance + currentDistance,
        )}입니다.`,
      );
    }

    dispatch(
      updateRunData({
        latitude: currentPoint.latitude,
        longitude: currentPoint.longitude,
        currentAltitude: currentPoint.currentAltitude,
        currentTime: currentPoint.currentTime,
        currentDistance: runStatus.distance + currentDistance,
        momentPace,
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
          if (altitude)
            setCurrentPoint({
              latitude,
              longitude,
              currentAltitude: altitude,
              currentTime: stopWatch.getTime(),
              currentDistance: 0,
              momentPace: 0,
            });
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
    } else {
      stopWatch.stop();
    }
  }, [isRunning]);

  useEffect(() => {
    startWatchLocation();
    return () => {
      dispatch(initRunData());
      stopWatchLocation();
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
