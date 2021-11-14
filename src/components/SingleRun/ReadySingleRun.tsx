import { useNavigation } from '@react-navigation/core';
import { Box } from 'native-base';
import React, { useRef } from 'react';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from './../common/CustomWebview';

const ReadySingleRun = () => {
  const webview = useRef<any>();
  const navigation = useNavigation();

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
          routes: [{ name: 'Root', state: { routes: [{ name: 'Running' }] } }],
        });
        return;
      }
    }
  };

  return (
    <Box flex={1} bgColor="white">
      <CustomWebview parentRef={webview} path="readySingleRun" onMessage={handleEvent} />
    </Box>
  );
};

export default ReadySingleRun;
