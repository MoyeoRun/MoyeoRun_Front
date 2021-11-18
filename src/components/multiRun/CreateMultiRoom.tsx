import { Box } from 'native-base';
import React, { useRef } from 'react';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from '../common/CustomWebview';

type CreateMultiRoomProps = {
  handleCreateMultiRoom: (data: Room) => void;
};

const CreateMultiRoom = ({ handleCreateMultiRoom }: CreateMultiRoomProps) => {
  const webview = useRef<any>();

  const sendProps = () => {
    webview.current.postMessage(JSON.stringify({ type: 'createMultiRoom', value: {} }));
  };

  const handleEvent = (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    switch (data.type) {
      case 'createMultiRoom':
        handleCreateMultiRoom(data.value);
        break;
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
