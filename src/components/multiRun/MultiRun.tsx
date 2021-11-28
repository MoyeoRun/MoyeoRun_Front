import { Box } from 'native-base';
import React, { useEffect, useRef } from 'react';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from '../common/CustomWebview';

type MultiRunProps = {
  time: number;
  user: User;
  room: Room;
  userRunData: UserRunData;
  handleEndRun: () => void;
};

const MultiRun = ({ time, user, room, userRunData, handleEndRun }: MultiRunProps) => {
  console.log({ time, user, room, userRunData });
  const webview = useRef<any>();

  const handleEvent = (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    switch (data.type) {
      case 'runEnd':
        handleEndRun();
        break;
    }
  };

  useEffect(() => {
    if (time) webview.current.postMessage(JSON.stringify({ type: 'time', value: time }));
  }, [time]);

  useEffect(() => {
    if (user) webview.current.postMessage(JSON.stringify({ type: 'user', value: user }));
  }, [user]);

  useEffect(() => {
    if (room) webview.current.postMessage(JSON.stringify({ type: 'room', value: room }));
  }, [room]);

  useEffect(() => {
    if (userRunData)
      webview.current.postMessage(JSON.stringify({ type: 'userRunData', value: userRunData }));
  }, [userRunData]);

  return (
    <Box flex={1}>
      <CustomWebview parentRef={webview} path="multiRun" onMessage={handleEvent} />
    </Box>
  );
};

export default MultiRun;
