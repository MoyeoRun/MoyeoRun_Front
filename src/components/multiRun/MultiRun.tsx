import { Box } from 'native-base';
import React, { useEffect, useRef } from 'react';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from '../common/CustomWebview';

type MultiRunProps = {
  time: number;
  user: User | null;
  othersRunData: OthersRunData | null;
  myRunData: MyRunData | null;
  handleExit: () => void;
};

const MultiRun = ({ time, user, othersRunData, myRunData, handleExit }: MultiRunProps) => {
  const webview = useRef<any>();

  const sendProps = () => {
    webview.current.postMessage(
      JSON.stringify({
        type: 'multiRun',
        value: {
          user,
          othersRunData,
          myRunData,
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
  }, [time, user, othersRunData, myRunData]);

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
