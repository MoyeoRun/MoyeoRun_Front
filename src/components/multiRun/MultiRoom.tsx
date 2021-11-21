import { Box } from 'native-base';
import React, { useEffect, useRef } from 'react';
import { WebViewMessageEvent } from 'react-native-webview';
import CustomWebview from '../common/CustomWebview';

type MultiRoomProps = {
  user: User | null;
  room: Room | null;
  statusbarHeight: number;
  handleJoinRoom: () => void;
  handleExitRoom: () => void;
  handleDeleteRoom: () => void;
  handleGoBack: () => void;
  handleRefresh: () => void;
};

const MultiRoom = ({
  user,
  room,
  statusbarHeight,
  handleJoinRoom,
  handleExitRoom,
  handleDeleteRoom,
  handleGoBack,
  handleRefresh,
}: MultiRoomProps) => {
  const webview = useRef<any>();

  const sendProps = () => {
    webview.current.postMessage(
      JSON.stringify({
        type: 'multiRoom',
        value: {
          user,
          room,
          statusbarHeight,
          roomOwner: room && room.multiRoomMember.filter((item) => item.isOwner)[0].multiRoomUser,
        },
      }),
    );
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
      case 'refresh':
        handleRefresh();
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
