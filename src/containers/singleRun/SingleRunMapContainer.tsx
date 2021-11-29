import { useNavigation } from '@react-navigation/core';
import {
  LocationAccuracy,
  LocationObject,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from 'expo-location';
import React, { useCallback, useEffect, useState } from 'react';
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
let distanceInterval: number = 1;

const SingleRunMapContainer = () => {
  const [point, setPoint] = useState<LocationObject['coords'] | null>(null);
  const { isRunning, section, runStatus, runData, startDate, type, targetTime, targetDistance } =
    useSelector((state: RootState) => state.singleRun);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onStartRunning = useCallback(() => {
    dispatch(changeSingleRunState('isRunning', true));
    if (!startDate) {
      dispatch(changeSingleRunState('startDate', new Date().toISOString()));
      speak('안녕하세요, 오늘도 즐거운 러닝 하세요');
    }
  }, []);

  const onStopRunning = useCallback(() => {
    dispatch(changeSingleRunState('isRunning', false));
    if (runData[section].length !== 0) dispatch(addNewSection());
  }, [runData, section]);

  const onFinishRunning = async () => {
    const filterRunData = runData.filter((item) => item.length !== 0);
    if (filterRunData[0].length === 0) {
      console.log('데이터가 하나도 없음');
      navigation.reset({
        index: 0,
        routes: [{ name: 'BottomTab', state: { routes: [{ name: 'Record' }] } }],
      });
      return;
    }
    await dispatch(
      finishSingleRun({
        type: type!,
        targetDistance,
        targetTime,
        runPace: runStatus.pace,
        runTime: runStatus.time,
        runDistance: runStatus.distance,
        runData: filterRunData,
        createdAt: startDate || new Date().toISOString(),
      }),
    );
    navigation.reset({
      index: 0,
      routes: [{ name: 'BottomTab', state: { routes: [{ name: 'Record' }] } }],
    });
  };

  const listenPosition = ({ latitude, longitude, altitude }: LocationObject['coords']) => {
    if (!isRunning) return;
    const currentRunData = runData[section];
    const currentTime = stopWatch.getTime();
    const lastPoint =
      currentRunData.length === 0 ? null : currentRunData[currentRunData.length - 1];
    let currentDistance = 0;
    let momentPace =
      section > 0 ? runData[section - 1][runData[section - 1].length - 1].momentPace : 0;

    if (lastPoint) {
      if (stopWatch.getTime() - lastPoint.currentTime < 1000) return;
      currentDistance = lastPoint
        ? getDistance(lastPoint.latitude, lastPoint.longitude, latitude, longitude)
        : 0;
      momentPace =
        currentDistance === 0 ? 0 : (currentTime - lastPoint.currentTime) / 60000 / currentDistance;
    }

    dispatch(
      updateRunData({
        latitude,
        longitude,
        currentAltitude: altitude!,
        currentTime: stopWatch.getTime(),
        currentDistance: currentDistance,
        momentPace,
      }),
    );
  };

  const startWatchLocation = async () => {
    watchLocation = await watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 0,
      },
      ({ coords }) => {
        if (coords.altitude) setPoint(coords);
      },
    );
  };

  useEffect(() => {
    if (point) {
      listenPosition(point);
    }
  }, [point]);

  useEffect(() => {
    if (targetDistance && runStatus.distance > targetDistance) {
      speak('축하합니다 목표 거리를 달성하셨습니다');
      dispatch(changeSingleRunState('runStatus', { ...runStatus, distance: targetDistance }));
      onFinishRunning();
    }
    if (targetTime && runStatus.time > targetTime) {
      speak('축하합니다 목표 시간을 달성하셨습니다');
      dispatch(changeSingleRunState('runStatus', { ...runStatus, time: targetTime }));
      onFinishRunning();
    }

    if (runStatus.distance > distanceInterval) {
      distanceInterval += distanceInterval;
      speak(
        `현재 페이스는 ${getPaceString(runStatus.pace)}, 달린 거리는 ${getDistanceString(
          runStatus.distance,
        )}입니다.`,
      );
    }
  }, [runStatus]);

  //스탑워치의 시간을 500ms간격으로 체크하여 시간을 업데이트해줍니다.
  useInterval(
    () => {
      dispatch(changeSingleRunState('runStatus', { ...runStatus, time: stopWatch.getTime() }));
    },
    isRunning ? 500 : null,
  );

  useEffect(() => {
    if (isRunning) {
      stopWatch.start();
    } else {
      stopWatch.stop();
    }
  }, [isRunning]);

  useEffect(() => {
    (async () => {
      try {
        await requestForegroundPermissionsAsync();
        console.log('포그라운드 권한성공');
      } catch (err) {
        alert('위치 권한이 필요합니다!');
        console.log(err);
      }
    })();
    startWatchLocation();
    return () => {
      dispatch(initRunData());
      watchLocation.remove();
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
