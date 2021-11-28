import { Box } from 'native-base';
import React, { useEffect, useRef } from 'react';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from '../common/CustomWebview';

type MultiRunProps = {
  time: number;
  user: User;
  room: Room;
  userRunData: UserRunData;
  handleExit: () => void;
};

const MultiRun = ({ time, user, room, userRunData, handleExit }: MultiRunProps) => {
  console.log({ time, user, room, userRunData });
  const webview = useRef<any>();

  const sendProps = () => {
    webview.current.postMessage(
      JSON.stringify({
        type: 'multiRun',
        value: {
          time,
          user,
          room,
          userRunData,
        },
      }),
    );
  };

  const handleEvent = (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    switch (data.type) {
      case '':
        handleExit();
        break;
    }
  };

  useEffect(() => {
    sendProps();
  }, [time, user, room, userRunData]);

  return (
    <Box flex={1}>
      <CustomWebview
        parentRef={webview}
        path="multiRun"
        onLoad={sendProps}
        onMessage={handleEvent}
      />
    </Box>
  );
};

export default MultiRun;
