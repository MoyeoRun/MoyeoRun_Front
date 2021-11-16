import { Box } from 'native-base';
import React, { useRef } from 'react';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from '../common/CustomWebview';

type CreateMultiRoomProps = {};

const CreateMultiRoom = ({}: CreateMultiRoomProps) => {
  const webview = useRef<any>();

  const sendProps = () => {
    webview.current.postMessage(JSON.stringify({ type: 'createMultiRoom', value: {} }));
  };

  const handleEvent = (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    switch (data.type) {
      case 'logout': {
        return;
      }
    }
  };

  return (
    <Box flex={1}>
      <CustomWebview
        parentRef={webview}
        path="createMultiRoom"
        onLoad={sendProps}
        onMessage={handleEvent}
      />
      ;
    </Box>
  );
};

export default CreateMultiRoom;
