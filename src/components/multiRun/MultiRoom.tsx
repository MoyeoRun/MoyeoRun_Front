import { Box } from 'native-base';
import React, { useEffect, useRef } from 'react';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from '../common/CustomWebview';

type MultiRoomProps = {
  user: User | null;
  room: Room | null;
  handleJoinRoom: () => void;
  handleExitRoom: () => void;
  handleDeleteRoom: () => void;
  handleGoBack: () => void;
};

const MultiRoom = ({
  user,
  room,
  handleJoinRoom,
  handleExitRoom,
  handleDeleteRoom,
  handleGoBack,
}: MultiRoomProps) => {
  const webview = useRef<any>();

  const sendProps = () => {
    webview.current.postMessage(JSON.stringify({ type: 'multiRoom', value: { user, room } }));
  };

  useEffect(() => {
    sendProps();
  }, [user, room]);

  const handleEvent = (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    switch (data.type) {
      case 'joinRoom':
        handleJoinRoom();
        break;
      case 'exitRoom':
        handleExitRoom();
        break;
      case 'deleteRoom':
        handleDeleteRoom();
        break;
      case 'goBack':
        handleGoBack();
        break;
    }
  };

  return (
    <Box flex={1}>
      <CustomWebview
        parentRef={webview}
        path="multiRoom"
        onLoad={sendProps}
        onMessage={handleEvent}
      />
    </Box>
  );
};

export default MultiRoom;
