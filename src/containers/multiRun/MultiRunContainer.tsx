import { useNavigation } from '@react-navigation/core';
import {
  LocationAccuracy,
  LocationObject,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from 'expo-location';
import { speak } from 'expo-speech';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { Stopwatch } from 'ts-stopwatch';
import MultiRun from '../../components/multiRun/MultiRun';
import useInterval from '../../lib/hooks/useInterval';
import { getDistance } from '../../lib/util/calcRunData';
import { getDistanceString, getPaceString } from '../../lib/util/strFormat';
import { RootState } from '../../modules';
import {
  updateUserRunData,
  endMultiRun,
  initRunData,
  updateTime,
  initUserRunData,
  changeMultiRunState,
} from '../../modules/multiRun';
import { getRoomById } from '../../modules/room';

let watchLocation: { remove: () => void };
let stopWatch = new Stopwatch();
let distanceInterval: number = 1;

const MultiRunContainer = () => {
  const [point, setPoint] = useState<LocationObject['coords'] | null>(null);
  const { time, startDate, userRunData } = useSelector((state: RootState) => state.multiRun);
  const { user } = useSelector((state: RootState) => state.user);
  const { room } = useSelector((state: RootState) => state.room);
  const { socket, roomId } = useSelector((state: RootState) => state.socket);

  const [runDataBuffer, setRunDataBuffer] = useState<RunData>([]);

  const myRunData = userRunData && user && userRunData.find((item) => item.user.id === user.id);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleEndRun = async () => {
    if (!myRunData || !room) return;
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
    if (!myRunData || !user) return;
    const currentTime = stopWatch.getTime();
    const lastPoint = myRunData.runData[myRunData.runData.length - 1];
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
      updateUserRunData({
        user: user,
        runStatus: {
          time: currentTime,
          distance: currentDistance,
          pace: currentDistance ? currentTime / 60000 / currentDistance : 0,
        },
        runData: [
          {
            latitude,
            longitude,
            currentAltitude: altitude!,
            currentTime,
            currentDistance: currentDistance,
            momentPace,
          },
        ],
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

  //스탑워치 listen
  // useInterval(
  //   () => {
  //     dispatch(updateTime(stopWatch.getTime()));
  //   },
  //   isRunning ? 500 : null,
  // );

  useEffect(() => {
    if (point) {
      listenPosition(point);
    }
  }, [point]);

  useEffect(() => {
    if (runDataBuffer.length !== 0 && socket && user && room) {
      socket.emit('runData', {
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
    console.log('멀티 런 접속 roomId: ', roomId);
    if (roomId) {
      dispatch(getRoomById(roomId));
    }
    stopWatch.start();
    dispatch(changeMultiRunState('startDate', new Date().toISOString()));
    startWatchLocation();
    return () => {
      dispatch(initRunData());
      watchLocation.remove();
    };
  }, []);

  useEffect(() => {
    if (room && !userRunData) {
      console.log('roomData 로드 완료 room: ', room);
      console.log(room.multiRoomMember);
      dispatch(initUserRunData(room.multiRoomMember));
    }
  }, [room]);

  useEffect(() => {
    if (socket) {
      socket.on('runBroadCast', (data: SocketRunBroadCast) => {
        dispatch(updateUserRunData(data));
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

  if (!room || !user || !userRunData) return null;

  return (
    <SafeAreaView mode="padding" style={{ flex: 1, backgroundColor: 'white' }}>
      <MultiRun
        time={time}
        user={user}
        room={room}
        userRunData={userRunData}
        handleExit={handleExit}
      />
    </SafeAreaView>
  );
};

export default MultiRunContainer;
