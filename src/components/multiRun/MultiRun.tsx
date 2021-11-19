import { Box } from 'native-base';
import React, { useEffect, useRef } from 'react';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from '../common/CustomWebview';

type MultiRunProps = {};

const MultiRun = ({}: MultiRunProps) => {
  const webview = useRef<any>();

  const sendProps = () => {
    webview.current.postMessage(JSON.stringify({ type: 'multiRun', value: {} }));
  };

  const handleEvent = (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    switch (data.type) {
    }
  };

  useEffect(() => {
    sendProps();
  }, []);

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
