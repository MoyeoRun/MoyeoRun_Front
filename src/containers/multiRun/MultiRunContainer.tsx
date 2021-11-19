import { useNavigation } from '@react-navigation/core';
import {
  LocationAccuracy,
  LocationObject,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from 'expo-location';
import { speak } from 'expo-speech';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stopwatch } from 'ts-stopwatch';
import MultiRun from '../../components/multiRun/MultiRun';
import useInterval from '../../lib/hooks/useInterval';
import { getDistance } from '../../lib/util/calcRunData';
import { getDistanceString, getPaceString } from '../../lib/util/strFormat';
import { RootState } from '../../modules';
import {
  UpdateOthersRunData,
  endMultiRun,
  UpdateMyRunData,
  initRunData,
  updateTime,
  initOthersRunData,
  initMyRunData,
  changeMultiRunState,
} from '../../modules/multiRun';

let watchLocation: { remove: () => void };
let stopWatch = new Stopwatch();
let distanceInterval: number = 1;

type MultiRunProps = {
  room: Room;
  userList: Array<User>;
};

const MultiRunContainer = ({ room, userList }: MultiRunProps) => {
  const { time, startDate, myRunData, othersRunData } = useSelector(
    (state: RootState) => state.multiRun,
  );
  const { user } = useSelector((state: RootState) => state.user);
  const [runDataBuffer, setRunDataBuffer] = useState<RunData>([]);
  const { socket } = useSelector((state: RootState) => state.socket);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleEndRun = async () => {
    if (!myRunData) return;
    await dispatch(
      endMultiRun({
        targetDistance: room.targetDistance,
        targetTime: room.targetTime,
        runPace: myRunData.runStatus.pace,
        runTime: myRunData.runStatus.time,
        runDistance: myRunData.runStatus.distance,
        runData: myRunData.runData,
        createdAt: startDate || new Date().toISOString(),
      }),
    );
    navigation.reset({
      index: 0,
      routes: [{ name: 'BottomTab', state: { routes: [{ name: 'Record' }] } }],
    });
  };

  const handleExit = () => {
    handleEndRun();
  };

  const listenPosition = ({ latitude, longitude, altitude }: LocationObject['coords']) => {
    const currentTime = stopWatch.getTime();
    const lastPoint = runData[runData.length - 1];
    const currentDistance = lastPoint
      ? getDistance(lastPoint.latitude, lastPoint.longitude, latitude, longitude)
      : 0;
    const momentPace =
      currentDistance === 0 ? 0 : (currentTime - lastPoint.currentTime) / 60000 / currentDistance;

    if (lastPoint) {
      if (stopWatch.getTime() - lastPoint.currentTime < 1000) return;
    }

    if (currentDistance > distanceInterval) {
      distanceInterval += distanceInterval;
      speak(
        `현재 페이스는 ${getPaceString(myRunData!.runStatus.pace)}, 달린 거리는 ${getDistanceString(
          currentDistance,
        )}입니다.`,
      );
    }

    setRunDataBuffer(runDataBuffer.concat());
    dispatch(
      UpdateMyRunData({
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
        if (coords.altitude) listenPosition(coords);
      },
    );
  };

  useInterval(() => {
    dispatch(updateTime(stopWatch.getTime()));
  }, 500);

  useEffect(() => {
    if (socket && user) {
      socket.emit('RunData', {
        userId: user.id,
        roomId: room.id,
        runData: runDataBuffer,
      });

      setRunDataBuffer([]);
    }
  }, [runDataBuffer]);

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
    stopWatch.start();
    dispatch(changeMultiRunState('startDate', new Date().toISOString()));
    startWatchLocation();
    initMyRunData(user!);
    initOthersRunData(userList);
    return () => {
      dispatch(initRunData());
      watchLocation.remove();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('runBroadCast', (data: SocketRunBroadCast) => {
        dispatch(UpdateOthersRunData(data));
      });
      socket.on('finish', (message: SocketFinish) => {
        speak('목표를 달성했습니다!');
      });
    }
    return () => {
      socket!.off('runBroadCast');
      socket!.off('finish');
    };
  }, [socket]);

  useEffect(() => {}, [dispatch]);

  return (
    <MultiRun
      time={time}
      user={user}
      othersRunData={othersRunData}
      myRunData={myRunData}
      handleExit={handleExit}
    />
  );
};

export default MultiRunContainer;
