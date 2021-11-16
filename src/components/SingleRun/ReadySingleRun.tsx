import { useNavigation } from '@react-navigation/core';
import { Box } from 'native-base';
import React, { useRef } from 'react';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from '../common/CustomWebview';

type ReadySingleRunProps = {};

const ReadySingleRun = ({}: ReadySingleRunProps) => {
  const webview = useRef<any>();
  const navigation = useNavigation();

  const sendProps = () => {
    webview.current.postMessage(JSON.stringify({ type: 'ReadySingleRun', value: {} }));
  };

  const handleEvent = (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    switch (data.type) {
      case 'startFreeRun': {
        navigation.reset({ index: 0, routes: [{ name: 'SingleRun' }] });
        return;
      }
      case 'goBack': {
        navigation.reset({
          index: 0,
          routes: [{ name: 'BottomTab', state: { routes: [{ name: 'Running' }] } }],
        });
        return;
      }
    }
  };

  return (
    <Box flex={1}>
      <CustomWebview parentRef={webview} path="home" onLoad={sendProps} onMessage={handleEvent} />;
    </Box>
  );
};

export default ReadySingleRun;
