import { Box } from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
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
  const [isLoadEnd, setIsLoadEnd] = useState(false);
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
    if (isLoadEnd && time)
      webview.current.postMessage(JSON.stringify({ type: 'time', value: time }));
  }, [isLoadEnd, time]);

  useEffect(() => {
    if (isLoadEnd && user)
      webview.current.postMessage(JSON.stringify({ type: 'user', value: user }));
  }, [isLoadEnd, user]);

  useEffect(() => {
    if (isLoadEnd && room)
      webview.current.postMessage(JSON.stringify({ type: 'room', value: room }));
  }, [isLoadEnd, room]);

  useEffect(() => {
    if (isLoadEnd && userRunData)
      webview.current.postMessage(JSON.stringify({ type: 'userRunData', value: userRunData }));
  }, [isLoadEnd, userRunData]);

  return (
    <Box flex={1}>
      <CustomWebview
        parentRef={webview}
        path="multiRun"
        onMessage={handleEvent}
        onLoadEnd={() => {
          setIsLoadEnd(true);
        }}
      />
    </Box>
  );
};

export default MultiRun;
